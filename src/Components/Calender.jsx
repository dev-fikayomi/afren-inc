import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../style.css";

const Calendar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [eventName, setEventName] = useState("");
  const [id, setId] = useState("");
  const [updateBtn, setUpdateBtn] = useState(false);
  const [events, setEvents] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    axios
    
      .get("https://afren-server-kjt8.onrender.com/api/getAllEvents", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.data.message);
      });
  }, []);

  const handleDateClick = (info) => {
    const selectedDate = new Date(info.dateStr);
    const today = new Date();
  
    if (selectedDate > today) {
      setSelectedDate(info.dateStr);
      setModalVisible(true);
    } else {
      toast.error("Please select a date later than today.");
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setUpdateBtn(false);
    setEventName("")
    setSelectedTime(null)
    setId("")
  };

  const clearFormHandler = () => {
    setEventName("")
    setSelectedTime("")
  }

  const generateEventId = () => {
    const timestamp = Date.now().toString();
    const randomPart = Math.floor(Math.random() * 100000000000)
      .toString()
      .padStart(12, 0);
    const parsedTimestap = parseInt(timestamp);
    const parsedRandowPart = parseInt(randomPart);
    let result = parsedTimestap + parsedRandowPart;
    const first12Digits = result.toString().substring(0, 12);

    return first12Digits;
  };

  const eventId = generateEventId();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setModalVisible(false);
    axios
      .post(
        "https://afren-main-server.onrender.com/api/createEvent",
        {
          gigId: eventId,
          name: eventName,
          time: selectedTime,
          date: selectedDate,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        toast.success("Event added successfully");
        setEventName("")
        setSelectedTime(null)
        axios
          .get("https://afren-main-server.onrender.com/api/getAllEvents", {
            headers: {
              Authorization: token,
            },
          })
          .then((response) => {
            setEvents(response.data);
          })
          .catch((error) => {
            toast.error(error.data.message);
          });
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  const handleDelete = (eventId) => {
    console.log(eventId)
    axios
      .post(
        "https://afren-main-server.onrender.com/api/deleteEvent",
        {
          eventId: eventId,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        axios
          .get("https://afren-main-server.onrender.com/api/getAllEvents", {
            headers: {
              Authorization: token,
            },
          })
          .then((response) => {
            setEvents(response.data);
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.data.message);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.data.message);
      });
  };

  const updateEvent = () => {
    axios
    .post(
      "https://afren-main-server.onrender.com/api/updateEvent",
      {
        eventId: id,
        name: eventName,
        time: selectedTime,
        date: selectedDate,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((response) => {
      console.log(response);
      toast.success("successfully updated the event!");
      setId("");

      axios
        .get("https://afren-main-server.onrender.com/api/getAllEvents")
        .then((response) => {
          setEvents(response.data.events);
        })
        .catch((error) => {
          toast.error(error.data.message);
        });
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.data.message);
    });
  }

  const handleUpdate = (eventId, name, eventTime) => {
    setUpdateBtn(true);
    setEventName(name);
    setSelectedTime(eventTime);
    setId(eventId);
  };

  return (
    <div className="myjobs-calendar-space">
      <Toaster />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "next",
        }}
        dateClick={handleDateClick}
      />
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <div className="calender-heading">
              <h1>Add Event</h1>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
            </div>
            <section className="calender-section">
              <form className="calender-form">
                <input
                  type="text"
                  placeholder="Event Name"
                  value={eventName}
                  required
                  onChange={(e) => setEventName(e.target.value)}
                  style={{
                    padding: "15px",
                    borderRadius: "8PX",
                    marginBottom: "1rem",
                  }}
                />
                <div className="calender-space">
                  <input
                    type="text"
                    className="calender-space1"
                    value={selectedDate}
                    disabled
                  />
                  <input
                    type="time"
                    className="calender-space2"
                    value={selectedTime}
                    required
                    onChange={(e) => setSelectedTime(e.target.value)}
                    placeholder="Time"
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <input type="text" placeholder="ID" hidden />
                <div className="calender-btn-wrapper">
                  { updateBtn ? <button type="button" onClick={updateEvent} className="calender-btn">
                    Update
                  </button> : <button type="button" onClick={handleFormSubmit} className="calender-btn">
                    Submit
                  </button>}
                  
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="deleteIcon"
                    onClick={clearFormHandler}
                  />
                </div>
              </form>
              <div className="event-list">
                <h2>Event List</h2>
                <ul>
                  {events.map((event) => (
                    <li key={event.id}>
                      <p>{event.name}</p>
                      <p>Date: {event.date}</p>
                      <p>Time: {event.time}</p>
                      <button onClick={() => handleUpdate(event.id, event.name, event.time)} className="update-calender-btn">
                        Update
                      </button>
                      <button onClick={() => handleDelete(event.id)} className="delete-calender-btn">
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
