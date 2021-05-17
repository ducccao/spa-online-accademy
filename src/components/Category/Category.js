import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import * as env_config from "../../config/env.config";
import Popover from "./PopoverCat";
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function Category() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sub_cat, set_sub_cat] = useState([]);
  const [sub_web_cat, set_sub_web_cat] = useState([]);
  const [sub_mobi_cat, set_sub_mobi_cat] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const categories = [
    {
      cat_id: 1,
      cat_name: "Web application development",
    },
    {
      cat_id: 2,
      cat_name: "Mobile application development",
    },
  ];

  useEffect(() => {
    const url = `${env_config.DEV_URL}/api/sub-category`;
    const config = {};
    axios
      .get(url, config)
      .then((ret) => {
        set_sub_cat(ret.data.data);
        const sub_web_cat = ret.data.data.filter((e) => e.cat_id === 1);
        const sub_mobi_cat = ret.data.data.filter((e) => e.cat_id === 2);
        set_sub_web_cat(sub_web_cat);
        set_sub_mobi_cat(sub_mobi_cat);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  return (
    <div>
      <Popover
        title="Categories"
        sub_web_cat={sub_web_cat}
        sub_mobi_cat={sub_mobi_cat}
        categories={categories}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      />
    </div>
  );
}