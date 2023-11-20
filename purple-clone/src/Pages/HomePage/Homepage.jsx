import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import AppNAtificationBar from "../../Components/AppNAtificationBar";
import { Box, Image, Spinner } from "@chakra-ui/react";
import SearchBar from "../../Components/SearchBar";
import Carousel from "../../Components/Carousel";
import axios from "axios";
import FeaturedProducts from "../../Components/FeaturedProducts";
import Banners from "../../Components/Banners";
import SmallImg from "../../Images/SmallImg";
import Carousel2 from "../../Components/Carousel2";
import Carousel3 from "../../Components/Carousel3";
import GridImages from "../../Components/GridImages";
import DataFetched from "../../FetchData/DataFetched";
import { featuredUrl } from "../../Components/Urls/url";

import BestSaller from "../../Components/BestSaller";
import AllHeading from "../../Components/AllHeading";
import CataStory from "../../Components/CataStory";
import TrandingNow from "../../Components/WhatareyouLookin";
import LimitedHour from "../../Components/LimitedHour";
import ComboDeals from "../../Components/ComboDeals";
import GreatDeal from "../../Components/GreatDeal";
import BugetBuy from "../../Components/BugetBuy";
import FreeGift from "../../Components/FreeGift";
import LOVEDbrand from "../../Components/LOVEDbrand";
import Tranding from "../../Components/Tranding";
import BODYCare from "../../Components/BODYCare";
import { useDispatch, useSelector } from "react-redux";

export default function Homepage() {
  const [AppBar, SetAppBar] = useState(true);

  const store = useSelector((res) => {
    return res.GridReducer;
  });
  // console.log(store);
  const isLoading = store.isLoading;
  // console.log(isLoading);

  return (
    <>
      {AppBar ? <AppNAtificationBar appbar={SetAppBar} /> : ""}
      <Navbar appbar={AppBar} />

      <SearchBar />
      <Carousel />
      <Banners
        image={
          "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1680602964_1280x272-web.jpg"
        }
      />
      <AllHeading text={"F E A T U R E D"} />
      <FeaturedProducts url={featuredUrl} />
      <SmallImg />
      <Carousel2 />
      <Banners
        image={
          "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1695795455_artboard-1-copy-4-2.jpg"
        }
      />
      <Banners
        image={
          "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/promo/1695892046_ag_without-time.jpg"
        }
      />
      <Banners
        image={
          "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/promo/1695892015_ag_b1g1_copy_1-2560x800.jpeg"
        }
      />

      <Carousel3 />

      <LimitedHour />
      <GridImages />
      <AllHeading text={"Best Sellers"} />
      <BestSaller />

      <CataStory />
      <TrandingNow />

      <ComboDeals />

      <GreatDeal
        text={"BRANDS WITH GREAT DEALS"}
        url={"https://server-sepia-tau.vercel.app/BRANDS_WITH_GREAT_DEALS"}
      />
      <BugetBuy />

      <LOVEDbrand />
      <Tranding />
      <FreeGift />
      <BODYCare />
      <br />
      <br />
      <Banners
        image={
          "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1695729045_discover-all-products-web.jpg"
        }
      />
      <br />
      <br />
      <Banners
        image={
          "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1662556480_benefit-icons-strip-web.jpg"
        }
      />

      <br />
      <Footer />
    </>
  );
}
