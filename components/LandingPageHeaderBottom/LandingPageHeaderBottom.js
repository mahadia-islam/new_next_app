import Link from "next/link";
import { Fragment, useState } from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./LandingPageHeaderBottom.module.css";

const LandingPageHeaderBottom = () => {
  const [activeClassName, setActiveClassName] = useState("");

  const handleMouseOver = (cls_name) => {
    setActiveClassName(cls_name);
  };

  const handleMouseLeave = (cls_name) => {
    setActiveClassName(cls_name);
  };

  const categories = [
    {
      title: "Graphic & Design",
      subcategory: [
        {
          title: "Logo & Brand Identity",
          cat: ["Logo Design", "Brand Style Guide"],
        },
        {
          title: "Logo & Brand Identity",
          cat: ["Logo Design", "Brand Style Guide"],
        },
        {
          title: "Logo & Brand Identity",
          cat: ["Logo Design", "Brand Style Guide"],
        },
        {
          title: "Logo & Brand Identity",
          cat: ["Logo Design", "Brand Style Guide"],
        },
        {
          title: "Logo & Brand Identity",
          cat: ["Logo Design", "Brand Style Guide"],
        },
        {
          title: "Logo & Brand Identity",
          cat: ["Logo Design", "Brand Style Guide"],
        },
        {
          title: "Logo & Brand Identity",
          cat: ["Logo Design", "Brand Style Guide"],
        },
      ],
    },
    {
      title: "Digitel Marketing",
      cat: [
        "Social Media Marketing",
        "Social Media Advertising",
        "Social Media Marketing",
        "Social Media Advertising",
        "Social Media Marketing",
        "Social Media Advertising",
        "Social Media Marketing",
        "Social Media Advertising",
        "Social Media Marketing",
        "Social Media Advertising",
        "Social Media Marketing",
        "Social Media Advertising",
        "Social Media Marketing",
        "Social Media Advertising",
        "Social Media Marketing",
        "Social Media Advertising",
      ],
    },
    {
      title: "Writing & Translation",
      cat: [
        "Translation",
        "Cover Latter",
        "Translation",
        "Cover Latter",
        "Translation",
        "Cover Latter",
        "Translation",
        "Cover Latter",
        "Translation",
        "Cover Latter",
        "Translation",
        "Cover Latter",
        "Translation",
        "Cover Latter",
        "Translation",
        "Cover Latter",
        "Translation",
        "Cover Latter",
        "Translation",
        "Cover Latter",
      ],
    },
    {
      title: "Video & Animation",
      cat: [
        "video Editing",
        "Visual Effects",
        "video Editing",
        "Visual Effects",
        "video Editing",
        "Visual Effects",
        "video Editing",
        "Visual Effects",
        "video Editing",
        "Visual Effects",
        "video Editing",
        "Visual Effects",
        "video Editing",
        "Visual Effects",
        "video Editing",
        "Visual Effects",
        "video Editing",
        "Visual Effects",
        "video Editing",
        "Visual Effects",
      ],
    },
    {
      title: "Music & Audio",
      cat: [
        "Voice Over",
        "Song Writter",
        "Voice Over",
        "Song Writter",
        "Voice Over",
        "Song Writter",
        "Voice Over",
        "Song Writter",
        "Voice Over",
        "Song Writter",
        "Voice Over",
        "Song Writter",
        "Voice Over",
        "Song Writter",
        "Voice Over",
        "Song Writter",
        "Voice Over",
        "Song Writter",
        "Voice Over",
        "Song Writter",
      ],
    },
    {
      title: "Programming & Tech",
      cat: [
        "Wordpress",
        "E-commerce",
        "Wordpress",
        "E-commerce",
        "Wordpress",
        "E-commerce",
        "Wordpress",
        "E-commerce",
        "Wordpress",
        "E-commerce",
        "Wordpress",
        "E-commerce",
        "Wordpress",
        "E-commerce",
        "Wordpress",
        "E-commerce",
        "Wordpress",
        "E-commerce",
        "Wordpress",
        "E-commerce",
        "Wordpress",
        "E-commerce",
        "Wordpress",
        "E-commerce",
      ],
    },
    {
      title: "Business",
      cat: [
        "Market Research",
        "Sales",
        "Market Research",
        "Sales",
        "Market Research",
        "Sales",
        "Market Research",
        "Sales",
        "Market Research",
        "Sales",
        "Market Research",
        "Sales",
        "Market Research",
        "Sales",
        "Market Research",
        "Sales",
        "Market Research",
        "Sales",
        "Market Research",
        "Sales",
        "Market Research",
        "Sales",
        "Market Research",
        "Sales",
      ],
    },
    {
      title: "Lifestyle",
      cat: [
        "Online Tutoring",
        "Gaming",
        "Online Tutoring",
        "Gaming",
        "Online Tutoring",
        "Gaming",
        "Online Tutoring",
        "Gaming",
        "Online Tutoring",
        "Gaming",
        "Online Tutoring",
        "Gaming",
        "Online Tutoring",
        "Gaming",
        "Online Tutoring",
        "Gaming",
        "Online Tutoring",
        "Gaming",
        "Online Tutoring",
        "Gaming",
        "Online Tutoring",
        "Gaming",
        "Online Tutoring",
        "Gaming",
      ],
    },
  ];

  return (
    <section className={classes.ladingPageHeaderBottom}>
      <Container>
        <Row>
          <div className={classes.dropdown_div}>
            {categories.map((category, indx) => (
              <Fragment key={indx}>
                <div className={classes.dropdown} data-dropdown>
                  <button
                    className={classes.link}
                    data-dropdown-button
                    onMouseEnter={() => handleMouseOver(`cat_no_${indx}`)}
                    onMouseLeave={() => handleMouseLeave("")}
                  >
                    {category.title}
                  </button>
                  <div
                    className={`${
                      activeClassName === `cat_no_${indx}` ? classes.active : ""
                    } ${classes.dropdown_menu} ${classes.information_grid} ${
                      categories.length - 1 === indx ||
                      categories.length - 2 === indx
                        ? classes.last_child
                        : ""
                    }`}
                    onMouseEnter={() => handleMouseOver(`cat_no_${indx}`)}
                    onMouseLeave={() => handleMouseLeave("")}
                  >
                    {category.cat ? (
                      //   <div>
                      //     <div className={classes.dropdown_links}>

                      //     </div>
                      //   </div>
                      <Fragment key={indx}>
                        {category.cat.map((cat_no, indx) => (
                          <a href="#" key={indx} className={classes.link}>
                            {cat_no}
                          </a>
                        ))}
                      </Fragment>
                    ) : category.subcategory ? (
                      category.subcategory.map((sub_cat, indx) => (
                        <div key={indx} className="mb-3">
                          <div className={classes.dropdown_heading}>
                            <h5> {sub_cat.title}</h5>
                          </div>
                          <div className={classes.dropdown_links}>
                            {sub_cat.cat &&
                              sub_cat.cat.map((cat_no, indx) => (
                                <a href="#" key={indx} className={classes.link}>
                                  {cat_no}
                                </a>
                              ))}
                          </div>
                        </div>
                      ))
                    ) : null}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default LandingPageHeaderBottom;
