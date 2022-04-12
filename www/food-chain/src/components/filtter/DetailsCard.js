import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from '../MainPadge/Products/TrendProduct.module.css';
import flagStyle from '../../assets/css/icons.css';
import Urls from '../../Urls';
import userService from '../../UserService';
import { Button, Card, Modal } from 'react-bootstrap';
import placeholders from '../MainPadge/Header.module.css';
import Task from './Task';
import { PhoneInput } from 'react-contact-number-input';

const DetailsCard = (props) => {
  const shipmentData = useRef();
  const portLoading = useRef();
  const purchaseVolume = useRef();
  const discription = useRef();
  const userEmail = useRef();
  const userCompany = useRef();
  const userPhone = useRef();
  const openModalBtn = useRef();
  const close = useRef();

  const [stateQuote, setStateQuote] = useState(props.isModalOpened);
  const [show, setShow] = useState(false);
  const [information, setInformation] = useState(false);
  const [openPopup , setOpenPopup] = useState(false)

  const measurePrice = () => {
    const result =
      +props.productId.data[0]?.price * +purchaseVolume.current?.value +
      Number(shipmentData.current?.value);

    if (!localStorage.measurementContract) {
      localStorage.measurementContract = result;
    }
    return result;
  };

  const handleClose = () => {
    close.current.click();
    setModalState(true);
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    setInformation(true);
  };

  const [srcPhoto, setSrc] = useState();
  const [photos, setPhotos] = useState();
  const [modalState, setModalState] = useState(true);
  const [isChanged, setIsChanged] = useState(true);
  const [mileStones, setMileStones] = useState([
    {
      id: '384hisdhf',
      task: null,
      date: null,
      amount: null,
    },
  ]);

  const handleuserCompany = (e) => {
    localStorage.company = e.target.value;
  };

  const [availableMilestones, setAvailableMilestones] = useState({
    'Pre-harvest': {
      selected: false,
    },
    Harvest: {
      selected: false,
    },
    Packing: {
      selected: false,
    },
    'Export documentation': {
      selected: false,
    },
    Arrival: {
      selected: false,
    },
  });

  const onSelectType = ({ id, task, date, amount }) => {
    console.log('from event');
    mileStones.map((item) => {
      if (item.id === id) {
        item.task = task;
        item.date = date;
        item.amount = amount;
      }
    });
    const selectedTasks = [];
    mileStones.reduce((acc, prev) => {
      if (acc.task) {
        selectedTasks.push(acc.task);
        return;
      }
      return selectedTasks.push(prev.task);
    }, '');

    const newAvaliableMileStone = availableMilestones;
    for (const item in newAvaliableMileStone) {
      if (selectedTasks.includes(item)) {
        newAvaliableMileStone[item].selected = true;
      } else {
        newAvaliableMileStone[item].selected = false;
      }
    }

    setAvailableMilestones(newAvaliableMileStone);
    setIsChanged(!isChanged);
  };

  const addNewTask = () => {
    const obj = {
      id: crypto.randomUUID(),
      task: null,
      date: null,
      amount: null,
    };
    setMileStones([...mileStones, obj]);
  };

  const handleMouseMove = (event) => {
    setSrc(event.target.src);
  };

  const username = useRef();
  const submitForm = (e) => {
    e.preventDefault();
    if (username.current?.value) {
      localStorage.token = crypto.randomUUID();
      localStorage.name = username.current?.value;
      userService.setLoggedStatus(true);
      setModalState(false);
    } else {
      alert('please complete your data!!');
    }
  };

  const setPurchase = (e) => {
    localStorage.setItem('volume', e.target.value);
  };

  const userShipment = (e) => {
    localStorage.shipment = e.target.value;
  };

  return (
    <div>
      {console.log('child')}
      <div className='container row'>
        <div className='col-4 mt-5 offset-1'>
          <div className='mb-5'>
            <Link
              style={{ color: '#C5CBC9', textDecoration: 'none' }}
              to='/categories'
            >
              <i
                class='fas fa-arrow-left'
                style={{ fontSize: '80%', marginRight: '10px' }}
              ></i>{' '}
              Browse Market
            </Link>
          </div>
          <div
            style={{
              height: '300px',
              borderRadius: '10px',
              border: '1px solid rgb(145, 174, 194)',
              overflew: 'hidden',
              objectFit: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              objectPosition: 'center center',
              backgroundImage: `${
                srcPhoto
                  ? 'url(' + srcPhoto + ')'
                  : photos && 'url(' + photos + ')'
              }`,
            }}
          ></div>
          <div className='d-flex'>
            {props.productId &&
              props.productId.data[0].files.map((res) => {
                return (
                  <div
                    className='m-1'
                    style={{ borderRadius: '10px', overflow: 'hidden' }}
                  >
                    <img
                      src={Urls.domainUrl + res.file_path}
                      alt='fruit'
                      width='100px'
                      height='100px'
                      onMouseMove={(event) => handleMouseMove(event)}
                    />
                    {!photos && setPhotos(Urls.domainUrl + res.file_path)}
                  </div>
                );
              })}
          </div>
        </div>
        <div className='col-6 m-5'>
          <div className='mt-5'>
            <br />
            <p className='h1 m'>
              {props.productId && props.productId.data[0].title}
            </p>
            <h6
              className='mt-3'
              style={{ color: 'rgb(99, 115, 129)', fontWeight: '600' }}
            >
              HS Code: 091011 - Ginger - whole
            </h6>
            <div className='d-flex mt-4'>
              <strong
                color='black'
                style={{
                  letterSpacing: '-0.7px',
                  fontSize: '24px',
                  fontWeight: '600',
                }}
              >
                Upon Request
              </strong>
              <button
                className={classes.buttonDetails}
                style={{ marginLeft: '20px' }}
              >
                Price Table
              </button>
            </div>
            <div style={{ marginTop: '-40px' }}>
              <span
                color='textLight'
                style={{ color: 'rgb(99, 115, 129)', fontSize: '13px' }}
              >
                USD / MT, March 7, 2022
              </span>
            </div>
            <div
              style={{
                height: '100px',
                borderRadius: '5px',
                boxShadow: '0em 0em 1em rgba(0,0,0,0.1)',
              }}
              className=' mt-5 p-4'
            >
              <ul style={{ listStyleType: 'none' }}>
                <li
                  style={{
                    color: 'rgb(33, 43, 54)',
                    fontSize: '14px',
                    lineHeight: '22px',
                    fontWeight: '400',
                  }}
                >
                  <i
                    class='fas fa-exclamation-circle'
                    style={{ marginLeft: '-35px', marginRight: '20px' }}
                  ></i>
                  Currently our offer prices are not available due to frequent
                  fluctuation. <br />
                  <a style={{ textDecoration: 'none' }}>Get a quote</a> now for
                  an offer price for this market.
                </li>
              </ul>
            </div>
            <div
              style={{
                borderRadius: '5px',
                boxShadow: '0em 0em 1em rgba(0,0,0,0.1)',
              }}
              className=' mt-5 p-4'
            >
              <h1
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Current Offer Base Prices
              </h1>
              <div
                style={{ borderRadius: '5px', backgroundColor: '#F9FAFB' }}
                className='mt-4 p-4'
              >
                <h1 style={{ fontSize: '16px', color: ' rgb(99, 115, 129)' }}>
                  Available Specifications:
                </h1>
                <ul
                  style={{
                    listStyleType: 'none',
                    color: ' rgb(99, 115, 129)',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '28px',
                  }}
                >
                  <li>Variety: Yellow, Mature</li>
                  <li>Color: Yellow</li>
                  <li>Grade: High Quality</li>
                  <li>Packaging Type: Carton Box</li>
                  <li>Processed Style: Fresh</li>
                  <li>Incoterms: FOB</li>
                </ul>
              </div>

              {/* Start of details modal */}
              <button
                ref={openModalBtn}
                type='button'
                className='btn btn-primary w-100 fw-bold'
                style={{ borderRadius: '20px', fontSize: '20px' }}
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                Get a Quote
              </button>

              <div
                class='modal fade'
                id='exampleModal'
                tabindex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <button
                  ref={close}
                  type='button'
                  class='btn-close mb-2'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
                <div
                  className='mx-auto modal-dialog modal-lg'
                  style={{ width: '100%', marginTop: '10%' }}
                >
                  <div className='modal-content'>
                    {modalState ? (
                      <div
                        className='row '
                        style={{
                          width: '980px',
                          marginLeft: '-100px',
                          padding: '32px',
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: '400',
                          fontSize: '14px',
                          lineHeight: '22px',
                          backgroundColor: `${
                            modalState ? 'rgb(33, 43, 54)' : 'lightgray'
                          }`,
                          borderRadius: '10px',
                        }}
                      >
                        <div style={{ width: '36%' }}>
                          <p
                            class='modal-title h1'
                            id='exampleModalLabel'
                            style={{
                              lineHeight: '28px',
                              fontSize: '20px',
                              fontWeight: '600',
                              color: 'rgb(255, 255, 255)',
                            }}
                          >
                            Get a quote for
                          </p>
                          <div
                            className='my-3 d-flex'
                            style={{ overflow: 'hidden' }}
                          >
                            <div
                              style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '5px',
                                objectFit: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                objectPosition: 'center center',
                                backgroundImage: `${
                                  photos && 'url(' + photos + ')'
                                }`,
                              }}
                            ></div>
                            <div>
                              <h1
                                style={{
                                  lineHeight: '24px',
                                  fontSize: '16px',
                                  fontWeight: '600',
                                  color: 'rgb(255, 255, 255)',
                                  marginLeft: '20px',
                                }}
                              >
                                {props.productId &&
                                  props.productId.data[0].title}
                              </h1>
                              <div className='d-flex'>
                                <h1
                                  style={{
                                    lineHeight: '24px',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    color: 'rgb(255, 255, 255)',
                                    marginLeft: '20px',
                                  }}
                                >
                                  {props.productId &&
                                    props.productId.data[0].country}
                                </h1>
                                <div
                                  style={{
                                    width: '40px',
                                    height: '20px',
                                    objectFit: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    objectPosition: 'center center',
                                    marginLeft: '15px',
                                  }}
                                >
                                  <i
                                    className={`flag-icon flag-icon-${props.productId.data[0].flag}`}
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{ marginTop: '40px', marginBottom: '20px' }}
                          >
                            <span
                              color='textLighter'
                              style={{
                                fontSize: '12px',
                                lineHeight: '16px',
                                fontWeight: '600',
                                color: 'rgb(157, 182, 204)',
                              }}
                            >
                              YOUR INFORMATION
                            </span>
                          </div>
                          <input
                            className='form-control text-light'
                            style={{
                              backgroundColor: 'rgb(69, 79, 91) ',
                              outline: 'none',
                              border: 'none',
                              padding: '13px',
                            }}
                            placeholder='Your full name'
                            type='text'
                            ref={username}
                          />
                          <input
                            className='form-control text-light'
                            style={{
                              backgroundColor: 'rgb(69, 79, 91) ',
                              outline: 'none',
                              marginTop: '10px',
                              border: 'none',
                              padding: '13px',
                            }}
                            placeholder='Your company name'
                            ref={userCompany}
                            onChange={(e) => handleuserCompany(e)}
                            type='text'
                          />
                          <input
                            className='form-control text-light'
                            style={{
                              backgroundColor: 'rgb(69, 79, 91) ',
                              outline: 'none',
                              marginTop: '10px',
                              border: 'none',
                              padding: '13px',
                            }}
                            placeholder='Your business email address'
                            ref={userEmail}
                            type='text'
                          />
                          <div
                            class='phone-container form-control'
                            style={{ marginTop: '10px' }}
                          >
                            <PhoneInput
                              className='w-100'
                              countryCode='us'
                              placeholder='Your phone number'
                              ref={userPhone}
                              withDarkTheme
                              withShadow
                              autoFocus
                            />
                          </div>
                          {/* <input
                            className='form-control'
                            style={{
                              backgroundColor: 'rgb(69, 79, 91) ',
                              outline: 'none',
                              marginTop: '10px',
                              border: 'none',
                              color: 'rgb(255, 255, 255)',
                              padding: '13px',
                            }}
                            placeholder='Your phone number'
                            ref={userPhone}
                            type='number'
                          /> */}

                          <div
                            style={{
                              fontSize: '12px',
                              color: 'rgb(157, 182, 204)',
                              marginTop: '20px',
                              lineHeight: '18px',
                            }}
                          >
                            <span className='text-light fw-bold'>
                              {' '}
                              Join Tru Market For Free
                            </span>
                            <br />
                            <span
                              style={{
                                color: 'rgb(157, 182, 204)',
                                marginTop: '20px',
                                lineHeight: '18px',
                                fontSize: '13px',
                                fontWeight: '400',
                              }}
                            >
                              to have your information filled in automatically.
                            </span>
                          </div>
                        </div>
                        <div className='col'>
                          <form
                            className='bg-light p-2'
                            style={{
                              borderRadius: '8px',
                              padding: '24px',
                              fontFamily: 'Inter, sans-serif',
                              fontWeight: '400',
                              fontSize: '14px',
                              lineHeight: '22px',
                              color: 'gray',
                            }}
                          >
                            {/* Start of my form */}
                            <div
                              style={{ padding: '24px' }}
                              className={placeholders.modalState}
                            >
                              <small
                                className='fw-bold'
                                style={{
                                  lineHeight: '16px',
                                  fontSize: '11px',
                                  color: 'rgb(99, 115, 129)',
                                  marginBottom: '20px',
                                }}
                              >
                                YOUR REQUIREMENTS
                              </small>
                              <div className='mt-3 form-inputs'>
                                <div class='d-flex align-items-center car-input border'>
                                  <div
                                    className='form-group-text border'
                                    style={{
                                      padding: '7px',
                                      backgroundColor: 'rgb(230 236 242)',
                                    }}
                                  >
                                    <i
                                      class='fa fa-truck-moving '
                                      style={{
                                        fontSize: '15px',
                                        marginRight: '10px',
                                        color: '#919EAB',
                                      }}
                                    ></i>
                                  </div>
                                  <div className='ms-auto'>
                                    <select
                                      id='cars'
                                      style={{
                                        marginRight: '10px',
                                        border: 'none',
                                      }}
                                    >
                                      <option value='volvo'>FOT</option>
                                      <option value='saab'>FCA</option>
                                      <option value='vw'>CIF</option>
                                      <option value='audi' selected>
                                        CFR
                                      </option>
                                    </select>
                                  </div>
                                  <div>
                                    <input
                                      type='number'
                                      placeholder='Port of loading'
                                      ref={portLoading}
                                      className={classes.inputNumber}
                                      class='form-control flex-grow-1'
                                      style={{
                                        border: 'none',
                                      }}
                                    />
                                  </div>
                                  <div>
                                    <select
                                      id='country'
                                      style={{
                                        border: 'none',
                                      }}
                                    >
                                      <option value='saab'>FCA</option>
                                      <option value='vw'>CIF</option>
                                      <option value='audi' selected>
                                        CFR
                                      </option>
                                      <option value='volvo' selected>
                                        {props.productId &&
                                          props.productId.data[0].country}
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <div class='input-group my-3'>
                                  <span
                                    class='input-group-text p-3'
                                    style={{ width: '45px' }}
                                  >
                                    <i
                                      class='fa fa-calendar-day form-group-text'
                                      style={{
                                        fontSize: '15px',
                                        color: '#919EAB',
                                      }}
                                    ></i>
                                  </span>
                                  <input
                                    onFocus={(e) => {
                                      e.target.type = 'date';
                                    }}
                                    onBlur={(e) => {
                                      e.target.type = 'text';
                                    }}
                                    className='form-control p-3'
                                    aria-label='Dollar amount (with dot and two decimal places)'
                                    placeholder='Preferred shipment date or schedule'
                                    ref={shipmentData}
                                    onChange={(e) => userShipment(e)}
                                  />
                                </div>
                                <div class='input-group my-3 '>
                                  <span
                                    class='input-group-text p-3'
                                    style={{ width: '45px' }}
                                  >
                                    <i
                                      class='fa fa-credit-card-front'
                                      style={{
                                        fontSize: '15px',
                                        color: '#919EAB',
                                      }}
                                    ></i>
                                  </span>
                                  <input
                                    type='text'
                                    className='form-control border-end-none p-3'
                                    placeholder='Purchase volume e.g. 10,000'
                                    ref={purchaseVolume}
                                    onChange={(e) => setPurchase(e)}
                                    style={{
                                      borderRight: 'none',
                                    }}
                                  />
                                  <select
                                    id='Select283'
                                    name='tentativePurchaseVolumeUnit'
                                    className='input-group-text'
                                    aria-invalid='false'
                                    style={{
                                      width: '100px',
                                      background: 'white',
                                    }}
                                  >
                                    <option value='_undefined'>Unit</option>
                                    <option value='ton'>metric ton</option>
                                    <option value='kg'>kg</option>
                                    <option value='lbs'>lbs</option>
                                    <option value='m3'>m³</option>
                                    <option value='l'>liter</option>
                                    <option value='ml'>ml</option>
                                  </select>
                                </div>
                                <div class=' my-3'>
                                  <textarea
                                    class='form-control'
                                    style={{
                                      resize: 'none',
                                      height: '108px',
                                      fontSize: '1rem',
                                    }}
                                    ref={discription}
                                    placeholder='Specifiy your needs, including packaging or requirements. ex) Hass / Size 40 / 25kg Carton Box / CIF Seoul'
                                    id='floatingTextarea'
                                  ></textarea>
                                </div>
                                <div className='d-flex align-items-center'>
                                  <div className='flex-grow-1'>
                                    <p
                                      className='small fw-bold'
                                      style={{
                                        fontWeight: '400',
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                        color: '#7E8B97',
                                        marginRight: '21px',
                                      }}
                                    >
                                      By sending a message to Tridge, you agree
                                      to be contacted by our sales team via your
                                      specified contact information.
                                    </p>
                                  </div>
                                  <div className='mx-2'>
                                    <button
                                      className='btn btn-primary fw-bold'
                                      style={{
                                        borderRadius: '30px',
                                        fontWeight: '70,0',
                                        padding: '10px',
                                        width: '100px',
                                      }}
                                      onClick={submitForm}
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    ) : (
                      <div
                        style={{
                          padding: '32px',
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: '400',
                          fontSize: '14px',
                          lineHeight: '22px',
                          backgroundColor: `${
                            modalState ? 'rgb(33, 43, 54)' : 'lightgray'
                          }`,
                          borderRadius: '10px',
                        }}
                      >
                        <p className='h3'>Hire</p>
                        <Card body className='personal_info mb-4'>
                          <div className='d-flex'>
                            <div
                              className='me-2'
                              style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundImage:
                                  'url("https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/4ZrVLdVKeijzurndz/people-emotion-and-facial-expression-concept-face-of-happy-smiling-middle-aged-woman-at-office_rleqp4y7g_thumbnail-1080_09.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                              }}
                            ></div>
                            <div className='flex-grow-1 p-2 py-3'>
                              <p className='h6 text-success'>
                                {localStorage?.name}
                              </p>
                              <span>
                                <i className='fa fa-car text-danger'></i>{' '}
                                {props.productId.data[0].country}
                              </span>
                            </div>
                          </div>
                        </Card>
                        <Card>
                          <Card.Text className='p-2'>
                            <p className='h4'>Terms</p>
                          </Card.Text>
                          <hr />
                          <Card.Body>
                            <small>
                              You're protected by{' '}
                              <span className='text-success fw-bold'>
                                Upwork Payment Protection
                              </span>{' '}
                              Only for the work you authorize.
                            </small>
                            <div className='payment-option mt-4'>
                              <p className='h5'>
                                Payment Option{' '}
                                <i className='fa fa-question'></i>
                              </p>
                              <p className='h6'>
                                Fixed-Price <i className='fa fa-pencil'></i>
                              </p>
                              <small className='text-muted'>
                                Pay as project milestone are completed.
                              </small>
                            </div>
                            <div className='fixed mt-4'>
                              <p className='h5'>
                                Pay a fixed price for your project
                              </p>
                              <p className='h6'>
                                {measurePrice()}
                                <i className='fa fa-pencil'></i>
                              </p>
                              <small className='text-muted'>
                                This is the price you and Farhan have agreed
                                upon.
                              </small>
                            </div>
                            <div className='deposit mt-4'>
                              <p className='h5'>Deposit funds into Escrow</p>
                              <small className='text-muted'>
                                Escrow is a neutral holding place that protects
                                your deposit until work is approved.
                              </small>
                              <p className='h4'>contract details</p>
                              <hr />
                              <table
                                style={{
                                  width: '100%',
                                  color: 'gray',
                                  fontWeight: 'bold',
                                  fontSize: '15px',
                                  marginBottom: '30px',
                                }}
                              >
                                <tr>
                                  <td>Company name</td>
                                  <td>{userCompany.current?.value}</td>
                                  <td>Email</td>
                                  <td>{userEmail.current?.value}</td>
                                </tr>
                                <tr>
                                  <td>phone Number</td>
                                  <td>{userPhone.current?.value}</td>
                                  <td>Port of loading</td>
                                  <td>{portLoading.current?.value}</td>
                                </tr>
                                <tr>
                                  <td>shipment date</td>
                                  <td>{shipmentData.current?.value}</td>
                                  <td>Purchase volume</td>
                                  <td>{purchaseVolume.current?.value}</td>
                                </tr>
                                <tr>
                                  <td>discription</td>
                                  <td>{discription.current?.value}</td>
                                </tr>
                              </table>
                              <hr />
                              <small className='text-muted'>
                                This is the price you and Farhan have agreed
                                upon.
                              </small>
                            </div>
                            <div className='deposit-funds mt-4'>
                              <p className='h5'>Deposit funds into Escrow</p>
                              <small className='text-muted'>
                                Escrow is a neutral holding place that protects
                                your deposit until work is approved.
                              </small>
                              <div className='mt-3'>
                                <label className='h6'>
                                  <input type='radio' name='deposite' /> Deposit
                                  $300.00 for the whole project
                                </label>
                                <br />
                                <label className='h6'>
                                  <input type='radio' name='deposite' /> Deposit
                                  a lesser amount to cover the first milestone.
                                </label>
                              </div>
                            </div>
                            <hr />
                          </Card.Body>
                          <Card.Body>
                            <p className='h4'>Project Milestones</p>
                            <small className='text-muted'>
                              Add project milestones and pay in installments as
                              each milestone is completed to your satisfaction.
                            </small>
                            {mileStones.map((item) => (
                              <Task
                                key={item.id}
                                data={item}
                                selectOption={mileStones}
                                availableMilestones={availableMilestones}
                                isChanged={isChanged}
                                onSelectType={onSelectType}
                              />
                            ))}

                            <Button
                              variant='success'
                              disabled={mileStones.length >= 5 && true}
                              onClick={addNewTask}
                            >
                              <i className='fa fa-plus'></i>
                            </Button>
                          </Card.Body>
                          <Card.Footer className='text-end'>
                            <Button variant='primary' onClick={handleShow}>
                              Submit
                            </Button>
                          </Card.Footer>
                        </Card>
                      </div>
                    )}

                    {information && (
                      <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop='static'
                        keyboard={false}
                        size='md'
                        centered
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id='contained-modal-title-vcenter'>
                            Submittion information
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className='d-flex'>
                            <div
                              className='quCode'
                              style={{ width: '202px', height: '178px' }}
                            >
                              <div
                                className='borderd'
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  backgroundImage:
                                    "url('https://www.pngmart.com/files/10/Qr-Code-Background-PNG.png')",
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  border: '1px solid #a4a0a0',
                                }}
                              ></div>
                            </div>
                            <div className='details ms-3'>
                              <div className='mb-2 fw-bold'>
                                <span>Product: </span>
                                <span className='dataSelected'>
                                  {props.productId?.data[0].title}
                                </span>
                              </div>
                              <div className='mb-2 fw-bold'>
                                <span>Quantity: </span>
                                <span className='dataSelected'>
                                  {localStorage.getItem('volume')}
                                </span>
                              </div>
                              <div className='mb-2 fw-bold'>
                                <span>Value of the contract (US$): </span>
                                <span className='dataSelected'>
                                  {localStorage.measurementContract}
                                </span>
                              </div>
                              <div className='mb-2 fw-bold'>
                                <span>Departed at: </span>
                                <span className='dataSelected'>
                                  {localStorage.company}
                                </span>
                              </div>
                              <div className='mb-2 fw-bold'>
                                <span>Arrived at: </span>
                                <span className='dataSelected'>
                                  {localStorage.shipment}
                                </span>
                              </div>
                              <div className='mb-2 fw-bold'>
                                <span>Blockchain address: </span>
                                <span className='dataSelected'>
                                  xxxxxxxxxxxx
                                </span>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant='primary' onClick={handleClose}>
                            Understood
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
