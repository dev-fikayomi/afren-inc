import React from 'react'

export default function Gig3({setCount, gigInfo, setGigInfo}) {
    const {projectLength, experienceLevel, difficulty } = gigInfo
    function handleSubmit(e){
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        setCount(4);
    }

    function changeHandler(e){
        const {value,name} = e.target

        setGigInfo({
            ...gigInfo,
            [name] : value
        })
    }

  return (
    <>
         <h1 className="step-h1">
            Estimating the scope
        </h1>
        <p className="description">
            Consider the size of your project and the time it witll take
        </p>
        <form action="" onSubmit={handleSubmit} className='gig-form'>
            <div className="step-work-scope">
                <h3>How long will the work take?</h3>
                <div className="swc-div">
                    <input 
                        type="radio" 
                        name="projectLength"
                        value="More than 6 months"
                        checked={projectLength === "More than 6 months"}
                        onChange={changeHandler}
                        id="" 
                    />
                    <p>More than 6 months</p>
                </div>
                <div className="swc-div">
                    <input 
                        type="radio" 
                        name="projectLength"
                        value={"3 to 6 months"}
                        checked={projectLength === "3 to 6 months"}
                        onChange={changeHandler}
                        id="" 
                    />
                    <p>3 to 6 months</p>
                </div>
                <div className="swc-div">
                    <input 
                        type="radio" 
                        name="projectLength"
                        value={"1 to 3 months"}
                        checked={projectLength === "1 to 3 months"}
                        onChange={changeHandler}
                        id="" 
                    />
                    <p>1 to 3 months</p>
                </div>
            </div>
            <div className="step-work-scope">
                <h3>What level of experience will the work need?</h3>
                <div className="swc-div">
                    <input 
                        type="radio" 
                        name="experienceLevel"
                        value={"Entry level"}
                        checked={experienceLevel === "Entry level"}
                        onChange={changeHandler} 
                        id="" 
                    />
                    <p>Entry level</p>
                </div>
                <div className="swc-div">
                    <input 
                        type="radio"
                        name="experienceLevel"
                        value={"Intermediate level"}
                        checked={experienceLevel === "Intermediate level"}
                        onChange={changeHandler} 
                    />
                    <p>Intermediate level</p>
                </div>
                <div className="swc-div">
                    <input 
                        type="radio" 
                        name="experienceLevel"
                        value={"Expert level"}
                        checked={experienceLevel === "Expert level"}
                        onChange={changeHandler}  
                    />
                    <p>Expert level</p>
                </div>
            </div>
            <div className="step-work-scope">
                <h3>Difficulty level of the work</h3>
                <div className="swc-div">
                    <input 
                        type="radio" 
                        name="difficulty"
                        value={"Large"}
                        checked={difficulty === "Large"}
                        onChange={changeHandler}
                    />
                    <p>Large</p>
                </div>
                <div className="swc-div">
                    <input 
                        type="radio" 
                        name="difficulty"
                        value={"Medium"}
                        checked={difficulty === "Medium"}
                        onChange={changeHandler}
                    />
                    <p>Medium</p>
                </div>
                <div className="swc-div">
                    <input 
                        type="radio" 
                        name="difficulty"
                        value={"Small"}
                        checked={difficulty === "Small"}
                        onChange={changeHandler}
                    />
                    <p>Small</p>
                </div>
            </div>
            <button className="step-btn" >
                Next : Budget
            </button>
        </form> 
    </>
  )
}
