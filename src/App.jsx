import React from "react";








export const App = () => {
  return (
  <>
    <div>
      <NetflixCard/>
      <NetflixCard/>
      <NetflixCard/>
      <NetflixCard/>
      <NetflixCard/>
    </div>
  </>
  );
};

const NetflixCard = () => {
  const namea = "Queen Of Tears";
  const rating = "Rating :8.5";
  const summary = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sitreprehenderit nulla. Debitis, voluptas perferendis tempora, quibusdamsequi necessitatibus enim quae velit maiores doloremque"

let age = 19;

const canWatch = () => {
 if(age > 18) return "Watch Now"
 return "Not Avaliable"
};


  const nextGenre = () => {
    const genre = "rancom"
    return genre;
  };


  // if(age < 18){

  //   return(
  //       <div>
    
  //       <div>
  //       <img src="qot.jpeg" alt="" height="40%" width="40%" />
  //     </div>
    
  //     <h2> Name : {namea}</h2>
  //     <h3> Rating {5 +3.2}</h3>
  //     <p> Genre : {summary}</p>
  //     <p> Genre : {nextGenre()}
  //     </p>
  //     <button>Not Avaliable</button>
      
  //       </div>
  //   )
  // }



  return(
    <div>

      <div>
      <img src="qot.jpeg" alt="" height="40%" width="40%" />
    </div>

    <h2> Name : {namea}</h2>
    <h3> Rating {5 +3.2}</h3>
    <p> Genre : {summary}</p>
    <p> Genre : {nextGenre()}
    </p>
    {/* <button>{age > 18 ? "watch Now" : "Not Avaliable"}</button> */}
      <button>{canWatch()}</button>
      </div>
  )
}
