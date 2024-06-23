import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SearchResultMapComponent from "../components/searchResultComponents/SearchResultMapComponent";
import SearchResultListComponent from "../components/searchResultComponents/SearchResultListComponent";
import ShopInfo from "../components/searchResultComponents/ShopInfo";

import DocumentSpecificationList from "../components/requirementsSpecificationComponents/documentSpecificationList";
import CopyshopSearchSpecificationForm from "../components/requirementsSpecificationComponents/copyshopSearchSpecificationForm.js";

import CopyShopService from "../services/CopyShopService";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// information
// import CopyShopService from "../services/CopyShopService";
// const 
// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
// }));
// const shops=CopyShopService.getShops()
// console.log(shops)


const result = [
    {id:'A', coordinates:{ lat: 48.16391, lng: 11.554312 }, price:21},
    {id:'B', coordinates:{ lat: 48.118234, lng: 11.563181 }, price:22},
    {id:'C', coordinates:{ lat: 48.127111, lng: 11.571124 }, price:21.5},
    {id:'D', coordinates:{ lat: 48.148588, lng: 11.509834 }, price:23},
    {id:'E', coordinates:{ lat: 48.151702, lng: 11.516968 }, price:22},
    {id:'F', coordinates:{ lat: 48.171264, lng: 11.563657 }, price:23.5},
    {id:'G', coordinates:{ lat: 48.104724, lng: 11.562905 }, price:23},
    {id:'H', coordinates:{ lat: 48.117685, lng: 11.599196 }, price:20},
    {id:'I', coordinates:{ lat: 48.128611, lng: 11.590222 }, price:20.5},
    {id:'J', coordinates:{ lat: 48.15, lng: 11.516667 }, price:24.5},
    {id:'K', coordinates:{ lat: 48.159859, lng: 11.528708 }, price:20.5},
    {id:'L', coordinates:{ lat: 48.165015, lng: 11.533858 }, price:22},
    {id:'M', coordinates:{ lat: 48.170104, lng: 11.543299 }, price:22.5},
    {id:'N', coordinates:{ lat: 48.1737, lng: 11.545187 }, price:20},
    {id:'O', coordinates:{ lat: 48.174785, lng: 11.537978 }, price:25},
    {id:'P', coordinates:{ lat: 48.119616, lng: 11.568119 }, price:24},
  ];


  
export default function SearchResultView(props) {
  const orderID = "temp";
  const testCopyshopSearchSpecification = useSelector((state) => state.testCopyshopSearchSpecification);
  console.log(testCopyshopSearchSpecification.option)

//   const classes = useStyles();
  const [hoveredIndex,setHoveredIndex] = React.useState(null)
  const [resultList,setResultList] = React.useState(result)
  const [shops,setShops] = React.useState([])
  useEffect(async () => {
    let shops = await CopyShopService.getShops();
    setShops(shops);
    console.log("here???")
  },[]);



const handleMapBoundsChanged = (bounds) => {
  //Eb mg lng kg
  //oc ug lat lc sg
  const ug_g=bounds.lc.g
  const ug_i=bounds.lc.i
  const mg_g=bounds.Eb.g
  const mg_i=bounds.Eb.i
  setResultList(result.filter(item => {
      // console.log(result)
      // console.log(item)
      const lat=item.coordinates.lat
      const lng=item.coordinates.lng
      return (
        (lat>ug_g) && (lat<ug_i) && (lng>mg_g) && (lng<mg_i)
      )
  }));
  console.log(resultList)
}
  return (
    <div>
      <DocumentSpecificationList orderId={orderID} />
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <CopyshopSearchSpecificationForm 
            handleNext={() => {props.history.push("/search_result")}} 
          />
        </Grid>
        <Grid item xs={5}>
          <List component="nav" >
            {shops.map((shop,index)=>
              <ListItem 
                key={index}
                
              >
                <ShopInfo
                  shopId={shop._id}
                />
              {/* <div>
                {JSON.stringify(shop)}
              </div> */}
              </ListItem>
            )}
          </List> 
            <SearchResultListComponent 
              resultList={resultList}
              setHoveredIndex={(index)=>{setHoveredIndex(index);console.log(hoveredIndex)}}
            />
        </Grid>
        <Grid item xs={5}>
            <SearchResultMapComponent 
                resultList={resultList}
                hoveredIndex= {hoveredIndex}
                onBoundsChanged={handleMapBoundsChanged}
            />
        </Grid>
      </Grid>
    </div>
  );
}