"use client"
import React, { useState } from "react";
import Carousel from "../components/Carousel";
import "./contact.scss";

export default function Contact() {
  const [submittedMsg, setSubmittedMsg] = useState('');

  const formSubmitted = () => {
    setSubmittedMsg("You've successfully submitted your request. Our customer service team will reach out to you within 48 hours to assist you.")
  }

    return (
      <div className="flex flex-col xl:w-[1030px] sm:w-[515px] w-[258px] justify-center mx-auto my-[20px] gap-[20px] ">
        <Carousel />
        <div className="font-bold text-lg"><h2 className="pb-[3px]">About Us:</h2><hr></hr></div>
        
        <p>Graham Gardens is a family-owned company passionate about helping people grow their own gardens. We specialize in offering high-quality seeds and are dedicated to educating and supporting new gardeners every step of the way. Whether you&apos;re just starting out or looking to expand your green thumb, our mission is to provide you with the best seeds and the knowledge you need to cultivate a thriving garden. At Graham Gardens, we believe that anyone can experience the joy of growing their own plants with the right guidance and quality products.</p>
        <div className="font-bold text-lg"><h2 className="pb-[3px]">Contact Us:</h2><hr></hr></div>
        
        <div><span className="font-bold">Phone:</span> 888-888-8888</div>
        <div><span className="font-bold">Email:</span> contact@grahamgardens.com</div>
        <hr></hr>
        <div className="font-bold text-lg"><h2 className="pb-[3px]">Submit a Request:</h2></div>
        {!submittedMsg && <form className="flex flex-col gap-[10px]">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" className="rounded h-[25px] w-[250px]"></input>
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" name="email" className="rounded h-[25px] w-[250px]"></input>
          <label htmlFor="phone">Phone: </label>
          <input type="text" id="phone" name="phone" className="rounded h-[25px] w-[250px]"></input>
          <label htmlFor="comments">Questions/Comments: </label>
          <textarea id="comments" name="comments" rows="4"  className="rounded"></textarea>
          <input
        onClick={formSubmitted}
        
        className="contact_btn text-[13px] px-[10px] py-[5px] my-[10px] h-[25px] w-[100px] hover:scale-105 cursor-pointer active:scale-95"
        type="button"
        value="SUBMIT"
      />
        </form>}
        {submittedMsg && <p>{submittedMsg}</p>}
      </div>
           
    );
  }
  