import React, { useEffect, useState } from "react";
import "./Home.css";
import Review from "../../components/Review/Review";
import showToast from "crunchy-toast";
import { saveListToLocalStorage } from "../../components/Util/Localstorage";

function Home() {

    const [reviewList,setReviewList]=useState([
        {
            id:1,
            name:"Nikita Kadiwike",
            description:"Amison Overseas: Trusted exporter of quality medicines. Diverse offerings, top-notch service, global trust. Preferred choice for pharmaceutical needs.",
            picture:"https://static.vecteezy.com/system/resources/thumbnails/030/691/616/small_2x/princess-2d-cartoon-illustraton-on-white-background-high-q-free-photo.jpg",
            experience:"good one",
            views:"2.2k views",
            raating:"4"
        }
    ])
    const [name,setName]=useState("")
    const [picture,setPicture]=useState("")
    const [description,setDescription]=useState("")
    // const [experience,setExperience]=useState("")
    const [views,setViews]=useState("")
    const [raating,setRaating]=useState("")

    useEffect(()=>{
        const list = JSON.parse(localStorage.getItem("reviews"));
        if(list && list.length > 0)setReviewList(list)
    },[])

    const clearInputFilds = () => {
        setName("");
        setDescription("");
        // setExperience("");
        setPicture("")
        setViews("")
        setRaating("")
      };

 
    const checkRequiredFilds = () => {
        if (!name) {
          showToast("Name is required", "alert", 3000);
          return false;
        }
        if (!raating) {
          showToast("raating is required", "alert", 3000);
          return false;
        }
        if (!description) {
          showToast("description is required", "alert", 3000);
          return false;
        }
        return true;
      };
      const addReviewList = () => {
        if (checkRequiredFilds() === false) {
          return;
        }
        const randomid = Math.floor(Math.random() * 1000);
        const obj = {
          id: randomid,
          name: name,
          description: description,
          picture:picture,
          views:views,
          raating:raating
        };
        const newReviewList = [...reviewList, obj];
        setReviewList(newReviewList);
        clearInputFilds();
        saveListToLocalStorage(newReviewList);
        showToast("List to be added successfully", "success", 3000); 
      };
  return (
    <div>
      <h1 className="customer-review-heading">What Our Customers Says</h1>
      <div className="input-box-container">
        <div>
          <label htmlFor="name">Add Your Good Name:</label>
          <br />
          <input 
          type="text" 
          name="name" 
          id="name" 
          value={name}
          onChange={(e)=>{
            setName(e.target.value);
          }}
          />
        </div>
        <div>
          <label htmlFor="Picture">App Picture:</label>
          <br />
          <input 
          type="text" 
          name="Picture" 
          id="Picture" 
          value={picture}
          onChange={(e)=>{
            setPicture(e.target.value)
          }}/>
        </div>
        <div>
  <label htmlFor="Description">Add Description:</label>
  <br />
  <textarea 
    name="Description" 
    id="Description" 
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    className="description-textarea"
  />
  {description.length === 5 && (
    <div className="message-box">Please provide a description.</div>
  )}
</div>
        <div>
          <label htmlFor="Views">Google Views:</label>
          <br />
          <input 
          type="text" 
          name="Views" 
          id="Views"
          value={views} 
          onChange={(e)=>{
          setViews(e.target.value)
          }}/>
        </div>
        <div>
          <label htmlFor="Raating">Raating:</label>
          <br />
          <input 
          type="number" 
          name="Raating" 
          id="Raating"
          value={raating} 
          onChange={(e)=>{
          setRaating(e.target.value)
          }}/>
        </div>
        <button
   type="button" onClick={addReviewList}> Add Review</button>
      </div>
      <div className="review-container">
        <h2 className="User Reviews"></h2>
        <div className="user-review-container">
        {reviewList.map((reviewItem , index)=>{
         const{id,name,description,picture,views,experience}=reviewItem;
         return(
            <Review
            id={id}
            name={name}
            description={description}
            picture={picture}
            views={views}
            experience={experience}
            key={index}
            />
         )
        })}
      </div>
      </div>
    </div>
  );
}

export default Home;
