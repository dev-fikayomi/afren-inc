import React from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import TypeOfUser from '../Components/TypeOfUser'

export default function FreelancerSignup() {
  return (
    <>
        <Header />
        <TypeOfUser  user={"signup as a freelancer"}/>
        <Footer />
    </>
  )
}
