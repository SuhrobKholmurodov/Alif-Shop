import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getUsers } from "../../api/FuncApi";

import "../../App.css";
// IMPORT FROM MUI
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import ChatIcon from "@mui/icons-material/Chat";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Skeleton from "@mui/material/Skeleton";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";

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
import defaultProfileImage from "/Default.jpg";
const Images = {
  1: Smartphone1,
  2: Laprob1,
  3: HeadPhone,
  4: SmartWhatch,
  5: Professional,
  6: SmartTv,
  7: Tablet,
  8: GamingConsole,
  9: Refregerator,
};

const Home = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open, name) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open, selectedProductName: name });
  };

  const list = (anchor, name) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false, name)}
      onKeyDown={toggleDrawer(anchor, false, name)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={`Product Name: ${name}`} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  const [open, setOpen] = React.useState(false);
  const [selectedProductName, setSelectedProductName] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [selectCategory, setSelectCategory] = useState("");
  const [search, setSearch] = useState("");

  console.log(sliderValue);

  const handleClickOpen = (name) => {
    setOpen(true);
    setSelectedProductName(name);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeSelect = (e) => {
    setSelectCategory(e.target.value);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const [selectBrand, setSelectBrand] = useState("");
  const handleChangeBrand = (e) => {
    setSelectBrand(e.target.value);
  };
  const data = useSelector((state) => state.data?.data);
  const users = useSelector((state) => state.data.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUsers());
  }, [dispatch]);

  const filterData = data?.filter((el) =>
    (selectCategory === "" || el.category === selectCategory) &&
    (selectBrand === "" || el.brand === selectBrand) &&
    sliderValue
      ? el.price <= sliderValue
      : el
  );

  const filteredData = filterData?.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <div className="all">
          <div className="flex justify-between">
            <div id="left" className="flex gap-[20px]">
              <div className="flex items-center gap-[20px]">
                <div id="SelectForCategory" className="flex flex-col gap-[5px]">
                  <p className="text-[grey]">Sort by category</p>
                  <FormControl sx={{ width: 200 }}>
                    <Select
                      value={selectCategory}
                      onChange={handleChangeSelect}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">All</MenuItem>
                      {data
                        ?.map((el) => el.category)
                        .filter((el, index, arr) => arr.indexOf(el) === index)
                        .map((el) => (
                          <MenuItem key={el.product_id} value={el}>
                            {el}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </div>
                <div>
                  {["right"].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                      >
                        {list(anchor, selectedProductName)}
                      </Drawer>
                    </React.Fragment>
                  ))}
                </div>

                <div id="SelectForCategory" className="flex flex-col gap-[5px]">
                  <p className="text-[grey]">Sort by brand</p>
                  <FormControl sx={{ width: 200 }}>
                    <Select
                      value={selectBrand}
                      onChange={handleChangeBrand}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">All</MenuItem>
                      {data
                        ?.map((el) => el.brand)
                        .filter((el, index, arr) => arr.indexOf(el) === index)
                        .map((el) => (
                          <MenuItem key={el.product_id} value={el}>
                            {el}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="flex flex-col justify-between h-[80px]">
                  <p className="text-gray-500 mb-1">Filter by price</p>
                  <input
                    className="w-64 appearance-none bg-[#c6c6c6] h-[8px] rounded-md outline-none opacity-70 hover:opacity-100 transition-opacity"
                    type="range"
                    min={`${Math.min([...data].price)}`}
                    max="999"
                    step={"1"}
                    defaultValue="999"
                    onChange={(e) => setSliderValue(e.target.value)}
                  />
                  <div className="flex gap-[10px]">
                    <p className="text-[grey]">The product for this price: </p>
                    <p className="text-center">{sliderValue} $</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="right" className="">
              <div className="mt-[30px]">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { width: "45ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Search by category, brand, name..."
                    variant="outlined"
                    value={search}
                    onInput={handleSearch}
                  />
                </Box>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap pt-[20px] justify-between gap-[20px]">
              {(search && !filteredData.length) ||
              (sliderValue && !filterData.length) ? (
                <h1 className="w-[100%] text-center text-[30px] font-[700] pt-[60px] pb-[60px]">
                  Not found
                </h1>
              ) : null}
              {!data.length
                ? Array.from(new Array(10)).map((i) => (
                    <Skeleton
                      key={i}
                      variant="rectangular"
                      width={273}
                      height={390}
                    />
                  ))
                : filteredData?.map((item) => {
                    return (
                      <Paper>
                        <div
                          id="all"
                          className="p-[10px] rounded-md flex flex-col justify-between w-[273px] h-[390px]"
                          key={item.product_id}
                        >
                          <div>
                            <div className="flex items-center justify-center">
                              <img
                                className="h-[230px] hover:scale-[1.1] duration-300 max-w-[230px] object-cover rounded-[4px]"
                                src={Images[item.product_id]}
                                alt={item.name}
                              />
                              <NavLink
                                to={`viewMore/${item.product_id}`}
                                id="seeMore"
                                className="absolute hover:text-[#d63333] duration-300 hover:bg-[#d6d5d5] mt-[-190px] border p-[6px] rounded-[7px] ml-[210px] bg-[#e9e6e6] bg-opacity-75 hover:bg-opacity-40 backdrop-blur"
                              >
                                <p>
                                  <RemoveRedEyeIcon />
                                </p>
                              </NavLink>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p>{item.name}</p>
                                <div>
                                  {item.rating > 4 ? (
                                    <div className="flex pt-[3px] items-center gap-[5px]">
                                      <Stack spacing={1}>
                                        <Rating
                                          sx={{ fontSize: "19px" }}
                                          name="half-rating-read"
                                          defaultValue={4.5}
                                          precision={0.5}
                                          readOnly
                                        />
                                      </Stack>
                                      <p className="text-[#a9a8a8] text-[15px]">
                                        {item.rating}
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
                                </div>
                              </div>
                              <div>
                                <Tooltip
                                  title="Reviews"
                                  arrow
                                  onClick={() => handleClickOpen(item.name)}
                                >
                                  <ChatIcon sx={{ fontSize: "30px" }} />
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="three leading-[18px]">
                              <div className="flex">
                                <p className="text-[15px] text-[#FF4444]">
                                  <span className="line-through">
                                    {Math.floor(item.price)}
                                  </span>
                                  <sup
                                    className="relative text-[12px]"
                                    style={{ top: "-4px" }}
                                  >
                                    {item.price.toFixed(2).split(".")[1]}
                                  </sup>
                                </p>
                                <span className="text-[#FF4444]">$</span>
                              </div>
                              <div>
                                <p className="text-[18px] font-[900]">
                                  <span>
                                    {Math.floor(
                                      item.price -
                                        (item.price * item.discount) / 100
                                    )}
                                  </span>
                                  <sup
                                    className="relative text-[12px]"
                                    style={{ top: "-4px" }}
                                  >
                                    {item.price.toFixed(2).split(".")[1]}
                                  </sup>
                                  $
                                </p>
                              </div>
                              <div className="flex text-[#7B7B7B] text-[12.5px] items-center gap-[3px]">
                                <p>You save: </p>
                                <p className="">
                                  {Math.floor(item.price) -
                                    Math.floor(
                                      item.price -
                                        (item.price * item.discount) / 100
                                    )}
                                  $
                                </p>
                              </div>
                            </div>
                            <div
                              onClick={(event) =>
                                toggleDrawer("right", true, item.name)(event)
                              }
                              className="border h-[40px] hover:bg-[#ff5050] p-[5px] rounded-full bg-[#FF4444] text-[#fff] w-[40px] flex items-center justify-center"
                            >
                              <ShoppingCartOutlinedIcon
                                sx={{ fontSize: "26px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </Paper>
                    );
                  })}
            </div>
          </div>
        </div>{" "}
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Reviews about{" "}
          <span className="text-[#3eb9c0]">{selectedProductName}</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {filteredData
              .filter((el) => el.name === selectedProductName)
              ?.map((item) =>
                item.reviews?.map((review, index) => {
                  let user_id = review.user_id;
                  if (user_id > 5) {
                    user_id = 4;
                  }
                  const user = users.find((el) => el.user_id === user_id);
                  return (
                    <div key={index} className="comment-container">
                      <img
                        src={defaultProfileImage}
                        alt="Profile"
                        className="profile-image"
                      />
                      <div className="comment-content w-[400px]">
                        <p className="username flex w-[400px] justify-between items-center">
                          {user ? user.username : "Unknown User"}
                          <div className="flex gap-[5px] items-center">
                            {review.rating == 4 ? (
                              <Rating
                                sx={{ fontSize: "17px" }}
                                name="half-rating"
                                defaultValue={4}
                              />
                            ) : (
                              <Rating
                                sx={{ fontSize: "17px" }}
                                name="half-rating"
                                defaultValue={5}
                              />
                            )}
                            <p className="text-[grey]">{review.rating}</p>
                          </div>
                        </p>
                        <p className="comment-text">
                          {review.comment !== ""
                            ? review.comment
                            : "There is no comments in this product"}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
