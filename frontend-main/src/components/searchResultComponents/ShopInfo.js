import React, {useState,useEffect} from 'react';
import { withRouter } from "react-router-dom";
import CheckOutButton from './CheckOutButton';
import ShopReviewsDialog from "./ShopReviewsDialog"
import CopyShopService from "../../services/CopyShopService";
import StarRating from "../review/StarRating";

function ShopInfo(props) {

  // console.log("her!!!!!!!!!!!err??????")
  // console.log(props.match.params.id)
  // console.log(CopyShopService.getShop(props.match.params.id))
  const [open, setOpen] = React.useState(false);
  
  const [information,setInformation] = React.useState(null)
  // const [refreshShop, setRefreshShop] = React.useState(true)

  async function getShop() {
    let shop = await CopyShopService.getShop(props.shopId)
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
  const clickShop = (id) => {
    props.history.push("/copyshop/" + id)
  }
  // CopyShop
  return (
    <div style={{width:'100%'}}>
      {/*  */}
      {information && 
      <div >
        <h5 onClick={() => clickShop(props.shopId)}>{information.name}</h5>
        <StarRating
          title=""
          value={information.ratings.overall}
        />
        <span
          onClick={() => { setOpen(true)}}
        > 
          See more reviews
        </span>
        <CheckOutButton 
          price={30}
        />
      </div>
      }
      <ShopReviewsDialog
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
export default withRouter(ShopInfo);