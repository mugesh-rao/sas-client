import React from 'react'
import { Carousel } from 'react-carousel-minimal';

function Caurosel() {
    const data = [
        
        {
          image: "https://www.stanthonysschool.org/assets/images/slide1.jpg",
          caption: "CANSAT Launch"
        },
        {
          image: "https://www.stanthonysschool.org/assets/images/slide2.jpg",
          caption: "Inaugartion"
        },
        {
          image: "https://images.shiksha.com/mediadata/images/1542344604phpBbXTsv.jpeg",
          caption: "Science Expo"
        },
        {
          image: "https://images.shiksha.com/mediadata/images/1620357938phpfYGM61.jpeg",
          caption: "Project Expo"
        },
     
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      

  
      return (
        <div className='text-center '>
           
            <div style={{
              padding: "0 20px"
            }}>
              <Carousel
                data={data}
                time={4000}
                width="100vw"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideImageFit="cover"
               
                style={{
                  textAlign: "center",
                  maxWidth: "100vw",
                  maxHeight: "500px",
                  margin: "40px auto",
                }}
              />
            </div>
          </div>
  )
}

export default Caurosel