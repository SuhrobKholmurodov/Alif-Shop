import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../api/FuncApi";
import { NavLink, useParams } from "react-router-dom";

// IMPORT FROM MUI
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// IMAGES
import Tablet from "/Tablet1.png";
import Laprob1 from "/Laprob1.png";
import Professional from "/Professional1.png";
import GamingConsole from "/GamingConsole1.png";
import HeadPhone from "/HeadPhone1.png";
import Smartphone1 from "/Smartphone1.png";
import SmartTv from "/SmartTv1.png";
import SmartWhatch from "/SmartWhatch1.png";
import Refregerator from "/Refregerator1.png";
const Image = [
  Smartphone1,
  Laprob1,
  HeadPhone,
  SmartWhatch,
  Professional,
  SmartTv,
  Tablet,
  GamingConsole,
  Refregerator,
];

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const ViewMore = () => {
  const data = useSelector((state) => state.data?.data);
  const { product_id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(product_id));
  }, [dispatch, product_id]);
  return (
    <div className="all">
      <div className="border-b pb-[10px]">
        {data?.map((el) => {
          if (el.product_id == product_id) {
            return (
              <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                  <NavLink to={"/"}>
                    <StyledBreadcrumb
                      component="a"
                      href="#"
                      label="Home"
                      icon={<HomeIcon fontSize="small" />}
                    />
                  </NavLink>
                  <StyledBreadcrumb
                    component="a"
                    href="#"
                    label={`${el.category}`}
                  />
                  <StyledBreadcrumb
                    component="a"
                    href="#"
                    label={`${el.brand}`}
                  />
                  <StyledBreadcrumb
                    component="a"
                    href="#"
                    label={`${el.name}`}
                  />
                </Breadcrumbs>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div>
        {data?.map((el, index) => {
          if (el.product_id == product_id) {
            return (
              <div className="all gap-[30px] pt-[23px] grid grid-cols-2">
                <div className="border flex border-[#d2d0d0] rounded-[15px] items-center justify-center h-[440px] w-[570px] p-[10px] bg-[#F6F6F6]">
                  <img
                    className="h-[410px] w-[450px] object-cover rounded-[4px]"
                    src={Image[index]}
                    alt=""
                  />
                </div>
                <div className="w-auto p-[15px] pt-[25px] flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[10px]">
                    {el.rating > 4 ? (
                      <div className="flex items-center gap-[10px]">
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                          />
                        </Stack>
                        <p className="text-[#a9a8a8] text-[20px] font-[700]">
                          {el.rating}
                        </p>
                      </div>
                    ) : (
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={0}
                          precision={0}
                          readOnly
                        />
                      </Stack>
                    )}
                    <p className="text-[#181717] font-[560] text-[29px]">
                      {el.name}
                    </p>
                    <div className="flex pb-[20px] items-center gap-[10px]">
                      <p className="text-2xl font-bold">
                        {(el.price - (el.price * el.discount) / 100).toFixed(2)}{" "}
                        $
                      </p>
                      <p className="line-through text-xl text-[#C4C9CE]">
                        {el.price} $
                      </p>
                      <p className="rounded-lg text-[14px] text-white bg-[#FF4444] p-[3px] flex items-center justify-center h-[23px] w-[44px]">
                        -{el.discount}%
                      </p>
                    </div>
                    <span className="border-b h-[1px] w-[100%]"></span>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="flex gap-[10px] items-center">
                      <span className="text-gray-500 text-[17px]">About</span>{" "}
                      {el.description}
                    </p>
                    <p
                      style={{
                        color: el.availability == true ? "green" : "red",
                      }}
                      className="flex gap-[10px] items-center"
                    >
                      <span className="text-gray-500 text-[17px]">
                        Availability
                      </span>{" "}
                      {el.availability == true ? (
                        <Chip
                          sx={{ width: "65px", height: "25px" }}
                          label="True"
                          color="success"
                        />
                      ) : (
                        <Chip
                          sx={{ width: "65px", height: "25px" }}
                          label="True"
                          color="success"
                        />
                      )}
                    </p>
                    <p className="flex gap-[10px] items-center">
                      <span className="text-gray-500 text-[17px]">Unit</span>{" "}
                      {el.unit}
                    </p>
                  </div>
                  <div className="two flex items-center justify-between">
                    <div className="button shadow-inner shadow-[#cecdcd] flex items-center rounded-[55px] justify-around h-[55px] border w-[140px]">
                      <RemoveIcon className="text-[grey] hover:text-black" />
                      <p>1</p>
                      <AddIcon className="text-[grey] hover:text-black" />
                    </div>
                    <div>
                      <button className="flex gap-[5px] items-center justify-center h-[55px] w-[350px] rounded-[55px] bg-[#FF4444] text-[#fff] duration-300 text-[20px] hover:bg-[#f2f1f1] hover:text-[#b72828] hover:text-[20px] hover:font-[700]">
                        <ShoppingCartOutlinedIcon sx={{ fontSize: "33px" }} />
                        <p className="text-[21px] font-[400]">Add to cart</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ViewMore;
