import { Container, makeStyles, Paper, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import LeftCat from "../LeftCat/LeftCat";
import Searchbar from "./Searchbar";
import CardCourse from "../CardCourse/CardCourse";
import Pagination from "./Pagination";
import cn from "classnames";
import axios from "axios";
import * as env from "../../config/env.config";
import { Link, useParams, useLocation } from "react-router-dom";
import { debounce } from "lodash";
import SortIcon from "@material-ui/icons/Sort";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography, Box } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Sort from "./Sort";
const style = makeStyles((theme) => ({
  main_course_list_wrapper: {
    flexGrow: 1,
    marginTop: 100,
    marginBottom: 100,
  },

  paper: {
    padding: 32,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  course_list: {
    marginTop: 14,
    marginBottom: 14,
  },
  pagination: {
    "& ul.MuiPagination-ul": {
      justifyContent: "flex-end",
    },
  },
  left_cat: {
    position: "sticky",
    top: 32,
    padding: 16,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  cat_icon: {
    "&.MuiListItemIcon-root": {
      minWidth: 40,
    },
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    "&:visited": {
      color: "inherit",
      textDecoration: "none",
    },
  },
  filter: {
    textAlign: "left",
  },
}));

const courses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const sort_info = [
  {
    sort_name: "Rate",
    sub_sort: [
      {
        sub_id: 1,
        sub_name: "asc",
      },
      {
        sub_id: 2,
        sub_name: "desc",
      },
    ],
  },
  {
    sort_name: "Price",
    sub_sort: [
      {
        sub_id: 1,
        sub_name: "asc",
      },
      {
        sub_id: 2,
        sub_name: "desc",
      },
    ],
  },
];

export default function CoursesList() {
  const classes = style();
  const [all_courses_finished, set_all_courses_finished] = useState([]);
  const [total_pagi_stuff, set_total_pagi_stuff] = useState([]);
  const [curr_page, set_curr_page] = useState([]);
  const [search_value, set_search_value] = useState("");
  const { id, rate_value, price_value } = useParams();
  const [sort_value, set_sort_value] = useState({
    sort_name: "",
    is_checked: false,
  });
  const location = useLocation();

  useEffect(() => {
    if (search_value) {
      debounce(() => {
        const all_courses_by_subcat_url = `${env.DEV_URL}/api/course/by-full-text-search/${search_value}`;
        const config = {};
        axios.get(all_courses_by_subcat_url, config).then((ret) => {
          set_all_courses_finished(ret.data.all_courses);
          set_total_pagi_stuff(ret.data.total_num_pagi_stuff);
          set_curr_page(ret.data.curr_pagi);
        });
      }, 500)();
    } else {
      if (id !== undefined) {
        set_search_value("");
        debounce(() => {
          const all_courses_by_subcat_url = `${env.DEV_URL}/api/course/byCat/${id}`;
          const config = {};
          axios.get(all_courses_by_subcat_url, config).then((ret) => {
            set_all_courses_finished(ret.data.course_by_sub_cat);
            set_total_pagi_stuff(ret.data.total_num_pagi_stuff);
            set_curr_page(ret.data.curr_pagi);
          });
        }, 200)();
      } else {
        if (rate_value !== undefined) {
          debounce(() => {
            const all_course_finished_url = `${env.DEV_URL}/api/course/byRate/${rate_value}`;
            const config = {};
            axios.get(all_course_finished_url, config).then((ret) => {
              set_all_courses_finished(ret.data.course_by_rate);
              set_total_pagi_stuff(ret.data.total_num_pagi_stuff);
              set_curr_page(ret.data.curr_pagi);
            });
          }, 200)();
        } else {
          if (price_value !== undefined) {
            const all_course_finished_url = `${env.DEV_URL}/api/course/byPrice/${price_value}`;
            const config = {};
            axios.get(all_course_finished_url, config).then((ret) => {
              set_all_courses_finished(ret.data.course_by_price);
              set_total_pagi_stuff(ret.data.total_num_pagi_stuff);
              set_curr_page(ret.data.curr_pagi);
            });
          } else {
            debounce(() => {
              const all_course_finished_url = `${env.DEV_URL}/api/course/all-with-finished`;
              const config = {};
              axios.get(all_course_finished_url, config).then((ret) => {
                set_all_courses_finished(ret.data.all_courses_finished);
                set_total_pagi_stuff(ret.data.total_num_pagi_stuff);
                set_curr_page(ret.data.curr_pagi);
              });
            }, 200)();
          }
        }
      }
    }
  }, [id, search_value, sort_value, rate_value, price_value]);

  const handlePagiChange = (event, value) => {
    set_curr_page(value);
    const config = {
      params: {
        pagi: value,
      },
    };

    if (search_value) {
      debounce(() => {
        const all_courses_by_subcat_url = `${env.DEV_URL}/api/course/by-full-text-search/${search_value}`;

        axios.get(all_courses_by_subcat_url, config).then((ret) => {
          set_all_courses_finished(ret.data.all_courses);
          set_total_pagi_stuff(ret.data.total_num_pagi_stuff);
          set_curr_page(ret.data.curr_pagi);
        });
      }, 500)();
    } else {
      if (id !== undefined) {
        set_search_value("");
        debounce(() => {
          const all_courses_by_subcat_url = `${env.DEV_URL}/api/course/byCat/${id}`;

          axios.get(all_courses_by_subcat_url, config).then((ret) => {
            set_all_courses_finished(ret.data.course_by_sub_cat);
            set_total_pagi_stuff(ret.data.total_num_pagi_stuff);
            set_curr_page(ret.data.curr_pagi);
          });
        }, 200)();
      } else {
        if (rate_value !== undefined) {
          debounce(() => {
            const all_course_finished_url = `${env.DEV_URL}/api/course/byRate/${rate_value}`;

            axios.get(all_course_finished_url, config).then((ret) => {
              set_all_courses_finished(ret.data.course_by_rate);
              set_total_pagi_stuff(ret.data.total_num_pagi_stuff);
              set_curr_page(ret.data.curr_pagi);
            });
          }, 200)();
        } else {
          if (price_value !== undefined) {
            const all_course_finished_url = `${env.DEV_URL}/api/course/byPrice/${price_value}`;

            axios.get(all_course_finished_url, config).then((ret) => {
              set_all_courses_finished(ret.data.course_by_price);
              set_total_pagi_stuff(ret.data.total_num_pagi_stuff);
              set_curr_page(ret.data.curr_pagi);
            });
          } else {
            debounce(() => {
              const all_course_finished_url = `${env.DEV_URL}/api/course/all-with-finished`;

              axios.get(all_course_finished_url, config).then((ret) => {
                set_all_courses_finished(ret.data.all_courses_finished);
                set_total_pagi_stuff(ret.data.total_num_pagi_stuff);
                set_curr_page(ret.data.curr_pagi);
              });
            }, 200)();
          }
        }
      }
    }
  };

  return (
    <React.Fragment>
      <Navbar />

      <main>
        <Container className={classes.main_course_list_wrapper} maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Paper className={cn(classes.paper, classes.left_cat)}>
                    <LeftCat />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={cn(classes.paper, classes.left_cat)}>
                    <Typography
                      className={classes.filter}
                      variant="h6"
                      component="p"
                    >
                      <Box px={2}>Filter</Box>
                    </Typography>
                    {sort_info.map((ele, i) => {
                      return (
                        <Sort
                          set_sort_value={set_sort_value}
                          sort_value={sort_value}
                          {...ele}
                          key={i}
                        />
                      );
                    })}
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Paper className={classes.paper}>
                <Searchbar
                  set_search_value={set_search_value}
                  search_value={search_value}
                  all_courses={all_courses_finished}
                />

                <Grid container spacing={4} className={classes.course_list}>
                  {all_courses_finished !== undefined &&
                  all_courses_finished.length !== 0 ? (
                    all_courses_finished.map((ele, i) => {
                      return (
                        <Grid key={i} item xs={12} sm={6} md={4} lg={4}>
                          <CardCourse {...ele} />
                        </Grid>
                      );
                    })
                  ) : (
                    <Box px={2}>Oops... There is no course!</Box>
                  )}
                </Grid>
                <Grid container spacing={4}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className={classes.pagination}
                  >
                    {total_pagi_stuff !== 0 ? (
                      <Pagination
                        curr_page={curr_page}
                        handlePagiChange={handlePagiChange}
                        set_curr_page={set_curr_page}
                        total_pagi_stuff={total_pagi_stuff}
                      />
                    ) : (
                      ""
                    )}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Footer />
    </React.Fragment>
  );
}
