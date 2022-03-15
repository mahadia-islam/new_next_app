import { Col, Container, Form, Row } from "react-bootstrap";
import classes from "./new_fix.module.css";
import Divider from "@mui/material/Divider";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import Image from "next/image";

const NewFix = () => {
  const [samples, setSamples] = useState([]);
  const [newFix, setNewFix] = useState({});
  const [files, setFiles] = useState([]);
  const [video, setVideo] = useState([]);
  const [price, setPrice] = useState("5");
  const [day, setDay] = useState("1");
  const [category, setCategory] = useState("Graphic & Design");

  const prices = [
    "5",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "55",
    "60",
    "65",
    "70",
    "75",
    "80",
    "85",
    "90",
    "95",
    "100",
  ];

  const categories = [
    {
      title: "Graphic & Design",
    },
    {
      title: "Digitel Marketing",
    },
    {
      title: "Writing & Translation",
    },
    {
      title: "Video & Animation",
    },
    {
      title: "Music & Audio",
    },
    {
      title: "Programming & Tech",
    },
    {
      title: "Business",
    },
    {
      title: "Lifestyle",
    },
  ];

  const days = [
    "1",
    "3",
    "7",
    "10",
    "15",
    "20",
    "25",
    "30",
    "45",
    "60",
    "75",
    "90",
  ];

  const { getRootProps: getRootfileProps, getInputProps: getInputfileProps } =
    useDropzone({
      accept: "image/*",
      onDrop: (acceptedFile) => {
        setFiles(acceptedFile);
      },
    });

  const { getRootProps: getRootVideoProps, getInputProps: getInputVideoProps } =
    useDropzone({
      accept: "video/*",
      onDrop: (acceptedFile) => {
        setVideo(acceptedFile);
      },
    });

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className={classes.edit_profile}>
      <Container>
        <Row className={classes.new_fix_row}>
          <Col lg="10" className={`mx-auto`}>
            <div className={classes.edit_profile_card}>
              <Col lg="11" className={`mx-auto`}>
                <Form onSubmit={submitHandler} noValidate>
                  <div className={classes.form_row}>
                    <Col lg="4">
                      <h3 className={classes.inputLabel}>
                        Create a Fix to start Selling
                      </h3>
                    </Col>
                    <Col lg="5">
                      <Form.Control
                        as="textarea"
                        rows={2}
                        placeholder="Enter Fix title"
                        className={classes.input_field}
                      />
                      <Form.Text className="text-muted">
                        * Your Fix title should start with "i will" or "i can"
                      </Form.Text>
                    </Col>
                  </div>
                  <div className={classes.form_row}>
                    <Col lg="4">
                      <h3 className={classes.inputLabel}>Description</h3>
                    </Col>
                    <Col lg="8">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        className={classes.input_field}
                        placeholder="Be detailed as possible"
                      />
                      <Form.Text className="text-danger">
                        * Posting of contact informations will result in
                        permanent blocking of your account
                      </Form.Text>
                    </Col>
                  </div>
                  <Divider />
                  <div className={classes.form_row}>
                    <Col lg="4">
                      <h3 className={classes.inputLabel}>
                        Details you need to start the project
                      </h3>
                    </Col>
                    <Col lg="8">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        className={classes.input_field}
                        placeholder="Enter details here"
                      />
                      <Form.Text className="text-danger">
                        * Do not request for contact details
                      </Form.Text>
                    </Col>
                  </div>
                  <div className={classes.form_row}>
                    <Col lg="4">
                      <p className={classes.small_label}>Select Price</p>
                    </Col>
                    <Col lg="4">
                      <Form.Select
                        className={classes.input_field}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      >
                        {prices.map((item, indx) => (
                          <option value={item} key={indx}>
                            {item}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </div>
                  <div className={classes.form_row}>
                    <Col lg="4">
                      <p className={classes.small_label}>Select Category</p>
                    </Col>
                    <Col lg="4">
                      <Form.Select
                        className={classes.input_field}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        {categories.map((item, indx) => (
                          <option value={item.title} key={indx}>
                            {item.title}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </div>
                  <div className={classes.form_row}>
                    <Col lg="4">
                      <p className={classes.small_label}>Delivery Days</p>
                    </Col>
                    <Col lg="4">
                      <Form.Select
                        className={classes.input_field}
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                      >
                        {days.map((item, indx) => (
                          <option value={item} key={indx}>
                            {item} days
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </div>
                  <div className={classes.form_row}>
                    <Col lg="4">
                      <p className={classes.small_label}>
                        Enter each tag seperated <br /> by comma (optional)
                      </p>
                    </Col>
                    <Col lg="4">
                      <Form.Control
                        type="email"
                        className={classes.input_field}
                      />
                    </Col>
                  </div>
                  <Divider />
                  <div className={classes.form_row}>
                    <Col lg="4">
                      <h3 className={classes.inputLabel}>Image Upload</h3>
                    </Col>
                    <Col lg="8" className={classes.image_div}>
                      {files.length >= 3 ? (
                        <div className={classes.dropImg}>
                          {files.length >= 3 && (
                            <Image
                              src={`${
                                files.length >= 1
                                  ? URL.createObjectURL(files[2])
                                  : ""
                              }`}
                              alt="dropImg"
                              width={216}
                              height={132}
                            />
                          )}
                        </div>
                      ) : (
                        <div
                          {...getRootfileProps({
                            className: classes.dropzone,
                          })}
                        >
                          <input {...getInputfileProps()} />
                          <p>
                            Drag a Image <br /> or Browse
                          </p>
                        </div>
                      )}

                      <div className={classes.dropImg}>
                        {files.length >= 1 && (
                          <Image
                            src={`${
                              files.length >= 1
                                ? URL.createObjectURL(files[0])
                                : ""
                            }`}
                            alt="dropImg"
                            width={216}
                            height={132}
                          />
                        )}
                      </div>
                      <div className={classes.dropImg}>
                        {files.length >= 2 && (
                          <Image
                            src={`${
                              files.length >= 1
                                ? URL.createObjectURL(files[1])
                                : ""
                            }`}
                            alt="dropImg"
                            width={216}
                            height={132}
                          />
                        )}
                      </div>
                    </Col>
                  </div>
                  <Col lg="8 ms-auto mb-4">
                    <small>
                      *Five (5) pictures with max file size (per image): 250kb
                    </small>
                  </Col>
                  <Divider />
                  <div className={classes.form_row}>
                    <Col lg="4">
                      <h3 className={classes.inputLabel}>Video Upload</h3>
                    </Col>
                    <Col lg="8">
                      {video.length >= 1 ? (
                        <div className="">
                          <video width="100%" height="300" controls>
                            <source
                              src={`${
                                video.length >= 1
                                  ? URL.createObjectURL(video[0])
                                  : ""
                              }`}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      ) : (
                        <div
                          {...getRootVideoProps({
                            className: classes.video_dropzone,
                          })}
                        >
                          <input {...getInputVideoProps()} />
                          <p>
                            Drag a Video <br /> or Browse
                          </p>
                        </div>
                      )}
                    </Col>
                  </div>
                  <Col lg="8 ms-auto mb-4">
                    <small>*One (1) Video and must be mp4 supported only</small>
                  </Col>
                  <Divider />
                  <div className={classes.form_row}>
                    <Col lg="4">
                      <h3 className={classes.inputLabel}>Work Samples</h3>
                    </Col>
                    <Col lg="4">
                      <Form.Control
                        type="text"
                        placeholder="E.g. www.fixlancer.com"
                        className={`${classes.input_field} mb-3`}
                      />
                      <Form.Control
                        type="text"
                        placeholder="E.g. www.fixlancer.com"
                        className={`${classes.input_field} mb-3`}
                      />
                      <Form.Control
                        type="text"
                        className={`${classes.input_field} mb-3`}
                        placeholder="E.g. www.fixlancer.com"
                      />
                      <Form.Control
                        type="text"
                        className={`${classes.input_field} mb-3`}
                        placeholder="E.g. www.fixlancer.com"
                      />
                      <Form.Control
                        type="text"
                        placeholder="E.g. www.fixlancer.com"
                        className={classes.input_field}
                      />
                    </Col>
                  </div>{" "}
                  <div className={classes.form_row}>
                    <Col lg="4">
                      <h3 className={classes.inputLabel}>Extra</h3>
                    </Col>
                    <Col lg="8">
                      <div className={classes.extra_grid}>
                        <Col>
                          <Form.Control
                            type="text"
                            placeholder="Extra description"
                            className={`${classes.input_field} mb-3`}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Extra description"
                            className={`${classes.input_field} mb-3`}
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            type="number"
                            placeholder="Amount"
                            className={`${classes.input_field} mb-3`}
                          />
                          <Form.Control
                            type="number"
                            className={`${classes.input_field} mb-3`}
                            placeholder="Amount"
                          />
                        </Col>
                      </div>
                    </Col>
                  </div>{" "}
                  <Col lg="8 ms-auto mb-4">
                    <button className={classes.create_fix} type="submit">
                      Create Fix
                    </button>
                  </Col>
                </Form>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewFix;
