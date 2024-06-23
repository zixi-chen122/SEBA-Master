import React, {useState,useEffect} from 'react';
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import CopyShopImage from '../components/review/CopyShopImage';
import PopupWrite from '../components/review/PopupWrite';
import ReviewForm from '../components/review/ReviewForm';
import CopyShopShowedInMap from '../components/review/CopyShopShowedInMap';
import RatingCommentsList from '../components/review/RatingCommentsList';
import RatingScores from '../components/review/RatingScores';
// import RatingByFeature from '../components/review/RatingByFeature';
import CopyShopService from "../services/CopyShopService";
import { FormatColorReset } from '@material-ui/icons';



function CopyShopPageView(props) {

  // console.log("her!!!!!!!!!!!err??????")
  // console.log(props.match.params.id)
  // console.log(CopyShopService.getShop(props.match.params.id))
  
  const [information,setInformation] = React.useState(null)
  // const [refreshShop, setRefreshShop] = React.useState(true)

  const [buttonPopup, setButtonPopup] = useState(false);

  async function getShop() {
      let shop = await CopyShopService.getShop(props.match.params.id)
      setInformation(shop.information);
      // console.log(shop.ratings)
  }
  // CopyShopService.getShops()
  // .then(data=>{setShops(data);
  //     console.log("here???")
  // });
    useEffect(() =>{
      getShop()
    },[]);
  const handleSubmitReview = async (review) => {
    console.log(review)
    console.log(review)
    console.log(review)
    console.log(review)
    await CopyShopService.review(props.match.params.id,review);
    setButtonPopup(false)
    getShop()
    // setRefresh(true)
  }
  // CopyShop
  return (
    <div>
      {/* <div>{name}</div> */}
      {information && <Grid container spacing={2}>
        <Grid item xs={6}>
        
        <React.Fragment>
          <CopyShopImage />
          <RatingScores
            ratings={information.ratings}
          />
          <br/><br/>
          <RatingCommentsList
            reviews={information.reviews}
          >
          </RatingCommentsList>
        </React.Fragment>
        <br/><br/>
        <br/><br/>
        <button onClick={()=> setButtonPopup(true)}>Write My Review</button>
        <PopupWrite trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h1>Write My Review</h1>
          <ReviewForm 
            onSubmit={handleSubmitReview}
          />
        </PopupWrite>
      <br/><br/>
      <br/><br/>

            {/* <ReviewForm 
              review={sendReview}
            /> */}
        </Grid>
        <Grid item xs={6}>
            <CopyShopShowedInMap 
                coordinates={information.coordinates}
            />
        </Grid>
      </Grid>}
    </div>
  );
}
export default withRouter(CopyShopPageView);