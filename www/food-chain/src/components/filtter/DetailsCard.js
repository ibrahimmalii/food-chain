import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from '../MainPadge/Products/TrendProduct.module.css';
import flagStyle from '../../assets/css/icons.css';
import Urls from '../../Urls';
import userService from '../../UserService';
import {
  Button,
  Card,
  Modal,
  Dropdown,
  FormControl,
  SplitButton,
  InputGroup,
} from 'react-bootstrap';
import placeholders from '../MainPadge/Header.module.css';
import Task from './Task';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const DetailsCard = (props) => {
  const shipmentData = useRef();
  const portLoading = useRef();
  const purchaseVolume = useRef();
  const discription = useRef();
  const userEmail = useRef();
  const userCompany = useRef();
  const openModalBtn = useRef();
  const close = useRef();
  const [stateQuote, setStateQuote] = useState(props.isModalOpened);
  const [userPhone, setUserPhone] = useState('');

  useEffect(() => {
    setStateQuote(true);
    if (stateQuote) {
      openModalBtn.current.click();
    }
  }, [props.isModalOpened]);

  const [show, setShow] = useState(false);
  const [information, setInformation] = useState(false);
  const [isEmail, setIsEmail] = useState(true);
  const [collectionModule, setCollectionModule] = useState({
    first: false,
    second: false,
    third: false,
  });

  const checkEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(email.target.value).toLowerCase());
    setIsEmail(isValid);
  };

  const openfirstModal = () => {
    setCollectionModule({
      first: true,
      second: false,
      third: false,
    });
  };

  const measureShipmentDate = () => {
    return new Date(localStorage.shipment).toLocaleDateString();
  };
  const measureArraialAt = () => {
    let result = new Date(localStorage.shipment);
    let finalResult = result.setDate(result.getDate() + 21);
    finalResult = new Date(finalResult).toLocaleDateString();
    return finalResult;
  };

  const measurePrice = () => {
    const result =
      +props.productId.data[0]?.price * +purchaseVolume.current?.value * 1000;

    if (!localStorage.measurementContract) {
      localStorage.measurementContract = result.toLocaleString();
    }
  };

  const handleClose = () => {
    close.current.click();
    setModalState(true);
    setShow(false);
    setCollectionModule({
      first: false,
      second: false,
      third: false,
    });
  };
  const handleShow = () => {
    setShow(true);
    setInformation(true);
    setCollectionModule({
      first: false,
      second: false,
      third: true,
    });
  };

  const [srcPhoto, setSrc] = useState();
  const [photos, setPhotos] = useState();
  const [modalState, setModalState] = useState(true);
  const [isChanged, setIsChanged] = useState(true);
  const [mileStones, setMileStones] = useState([
    {
      id: '384hisdhf',
      task: 'Pre-harvest',
      date: null,
      amount: null,
    },
    {
      id: 'kdjfaije83',
      task: 'Harvest',
      date: null,
      amount: null,
    },
    {
      id: 'dkj83fkm',
      task: 'Packing',
      date: null,
      amount: null,
    },
    {
      id: 'lsdi8333',
      task: 'Export documentation',
      date: null,
      amount: null,
    },
    {
      id: 'akiehhd',
      task: 'Arrival',
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
      id: Math.random().toString(15).substring(2),
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
    console.log(userPhone);
    measurePrice();
    e.preventDefault();
    if (
      username.current?.value &&
      userEmail.current.value &&
      isEmail &&
      userPhone.length > 5 &&
      userCompany.current.value &&
      purchaseVolume.current?.value &&
      shipmentData.current?.value
    ) {
      localStorage.token = Math.random().toString(15).substring(2);
      localStorage.name = username.current?.value;
      userService.setLoggedStatus(true);
      setModalState(false);
      setCollectionModule({
        first: false,
        second: true,
        third: false,
      });
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
      <div className='container d-flex'>
        <div className='mt-5'>
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
        <div className='m-5 flex-grow-1'>
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
                onClick={openfirstModal}
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
                  style={{ width: '100%' }}
                >
                  <div className='modal-content'>
                    {collectionModule.first ? (
                      <div
                        className='row '
                        style={{
                          width: '900px',
                          padding: '30px 17px',
                          fontWeight: '400',
                          fontSize: '14px',
                          lineHeight: '22px',
                          backgroundColor: `${
                            modalState ? 'rgb(33, 43, 54)' : 'rgb(33, 43, 54)'
                          }`,
                          borderRadius: '10px',
                          overflowY: 'auto',
                          maxHeight: 'calc(100vh - 145px)',
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
                            type='email'
                            onChange={checkEmail}
                          />
                          <small
                            className={
                              isEmail ? 'd-none' : 'text-danger fw-bold'
                            }
                          >
                            You have to write a correct email
                          </small>
                          <PhoneInput
                            name='phoneNumber'
                            type='text'
                            value={userPhone}
                            onChange={(phone) => setUserPhone(phone)}
                            country={'us'}
                            enableAreaCodes={true}
                            containerStyle={{
                              backgroundColor: 'rgb(69, 79, 91) ',
                              outline: 'none',
                              marginTop: '10px',
                              border: 'none',
                              padding: '7px 0',
                              borderRadius: '5px',
                            }}
                            inputStyle={{
                              background: 'rgb(69, 79, 91)',
                              width: '98%',
                              color: 'white',
                              border: 'none',
                            }}
                          />

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
                              Join TRU MARKET for free
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
                                <div class='input-group my-3 '>
                                  <span
                                    class='input-group-text p-3'
                                    style={{ width: '45px' }}
                                  >
                                    <i
                                      class='fa fa-truck-moving '
                                      style={{
                                        fontSize: '15px',
                                        marginRight: '10px',
                                        color: '#919EAB',
                                      }}
                                    ></i>
                                  </span>
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
                                    <option value='fob' selected>
                                      FOB
                                    </option>
                                    <option value='exw'>EXW</option>
                                    <option value='cfr'>CFR</option>
                                    <option value='cif'>CIF</option>
                                    <option value='ddp'>DDP</option>
                                  </select>
                                  <input
                                    type='text'
                                    className='form-control border-end-none p-3'
                                    placeholder='Port of loading'
                                    ref={portLoading}
                                    style={{
                                      borderRight: 'none',
                                      borderLeft: 'none',
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
                                    <option value='volvo' selected>
                                      {props.productId &&
                                        props.productId.data[0].country}
                                    </option>
                                    <option value='AF'>Afghanistan</option>
                                    <option value='AL'>Albania</option>
                                    <option value='DZ'>Algeria</option>
                                    <option value='AS'>American Samoa</option>
                                    <option value='AD'>Andorra</option>
                                    <option value='AO'>Angola</option>
                                    <option value='AI'>Anguilla</option>
                                    <option value='AQ'>Antarctica</option>
                                    <option value='AG'>
                                      Antigua and Barbuda
                                    </option>
                                    <option value='AR'>Argentina</option>
                                    <option value='AM'>Armenia</option>
                                    <option value='AW'>Aruba</option>
                                    <option value='AU'>Australia</option>
                                    <option value='AT'>Austria</option>
                                    <option value='AZ'>Azerbaijan</option>
                                    <option value='BS'>Bahamas</option>
                                    <option value='BH'>Bahrain</option>
                                    <option value='BD'>Bangladesh</option>
                                    <option value='BB'>Barbados</option>
                                    <option value='BY'>Belarus</option>
                                    <option value='BE'>Belgium</option>
                                    <option value='BZ'>Belize</option>
                                    <option value='BJ'>Benin</option>
                                    <option value='BM'>Bermuda</option>
                                    <option value='BT'>Bhutan</option>
                                    <option value='BO'>Bolivia</option>
                                    <option value='BA'>
                                      Bosnia and Herzegowina
                                    </option>
                                    <option value='BW'>Botswana</option>
                                    <option value='BV'>Bouvet Island</option>
                                    <option value='BR'>Brazil</option>
                                    <option value='IO'>
                                      British Indian Ocean Territory
                                    </option>
                                    <option value='BN'>
                                      Brunei Darussalam
                                    </option>
                                    <option value='BG'>Bulgaria</option>
                                    <option value='BF'>Burkina Faso</option>
                                    <option value='BI'>Burundi</option>
                                    <option value='KH'>Cambodia</option>
                                    <option value='CM'>Cameroon</option>
                                    <option value='CA'>Canada</option>
                                    <option value='CV'>Cape Verde</option>
                                    <option value='KY'>Cayman Islands</option>
                                    <option value='CF'>
                                      Central African Republic
                                    </option>
                                    <option value='TD'>Chad</option>
                                    <option value='CL'>Chile</option>
                                    <option value='CN'>China</option>
                                    <option value='CX'>Christmas Island</option>
                                    <option value='CC'>
                                      Cocos (Keeling) Islands
                                    </option>
                                    <option value='CO'>Colombia</option>
                                    <option value='KM'>Comoros</option>
                                    <option value='CG'>Congo</option>
                                    <option value='CD'>
                                      Congo, the Democratic Republic of the
                                    </option>
                                    <option value='CK'>Cook Islands</option>
                                    <option value='CR'>Costa Rica</option>
                                    <option value='CI'>Cote d'Ivoire</option>
                                    <option value='HR'>
                                      Croatia (Hrvatska)
                                    </option>
                                    <option value='CU'>Cuba</option>
                                    <option value='CY'>Cyprus</option>
                                    <option value='CZ'>Czech Republic</option>
                                    <option value='DK'>Denmark</option>
                                    <option value='DJ'>Djibouti</option>
                                    <option value='DM'>Dominica</option>
                                    <option value='DO'>
                                      Dominican Republic
                                    </option>
                                    <option value='TP'>East Timor</option>
                                    <option value='EC'>Ecuador</option>
                                    <option value='EG'>Egypt</option>
                                    <option value='SV'>El Salvador</option>
                                    <option value='GQ'>
                                      Equatorial Guinea
                                    </option>
                                    <option value='ER'>Eritrea</option>
                                    <option value='EE'>Estonia</option>
                                    <option value='ET'>Ethiopia</option>
                                    <option value='FK'>
                                      Falkland Islands (Malvinas)
                                    </option>
                                    <option value='FO'>Faroe Islands</option>
                                    <option value='FJ'>Fiji</option>
                                    <option value='FI'>Finland</option>
                                    <option value='FR'>France</option>
                                    <option value='FX'>
                                      France, Metropolitan
                                    </option>
                                    <option value='GF'>French Guiana</option>
                                    <option value='PF'>French Polynesia</option>
                                    <option value='TF'>
                                      French Southern Territories
                                    </option>
                                    <option value='GA'>Gabon</option>
                                    <option value='GM'>Gambia</option>
                                    <option value='GE'>Georgia</option>
                                    <option value='DE'>Germany</option>
                                    <option value='GH'>Ghana</option>
                                    <option value='GI'>Gibraltar</option>
                                    <option value='GR'>Greece</option>
                                    <option value='GL'>Greenland</option>
                                    <option value='GD'>Grenada</option>
                                    <option value='GP'>Guadeloupe</option>
                                    <option value='GU'>Guam</option>
                                    <option value='GT'>Guatemala</option>
                                    <option value='GN'>Guinea</option>
                                    <option value='GW'>Guinea-Bissau</option>
                                    <option value='GY'>Guyana</option>
                                    <option value='HT'>Haiti</option>
                                    <option value='HM'>
                                      Heard and Mc Donald Islands
                                    </option>
                                    <option value='VA'>
                                      Holy See (Vatican City State)
                                    </option>
                                    <option value='HN'>Honduras</option>
                                    <option value='HK'>Hong Kong</option>
                                    <option value='HU'>Hungary</option>
                                    <option value='IS'>Iceland</option>
                                    <option value='IN'>India</option>
                                    <option value='ID'>Indonesia</option>
                                    <option value='IR'>
                                      Iran (Islamic Republic of)
                                    </option>
                                    <option value='IQ'>Iraq</option>
                                    <option value='IE'>Ireland</option>
                                    <option value='IL'>Israel</option>
                                    <option value='IT'>Italy</option>
                                    <option value='JM'>Jamaica</option>
                                    <option value='JP'>Japan</option>
                                    <option value='JO'>Jordan</option>
                                    <option value='KZ'>Kazakhstan</option>
                                    <option value='KE'>Kenya</option>
                                    <option value='KI'>Kiribati</option>
                                    <option value='KP'>
                                      Korea, Democratic People's Republic of
                                    </option>
                                    <option value='KR'>
                                      Korea, Republic of
                                    </option>
                                    <option value='KW'>Kuwait</option>
                                    <option value='KG'>Kyrgyzstan</option>
                                    <option value='LA'>
                                      Lao People's Democratic Republic
                                    </option>
                                    <option value='LV'>Latvia</option>
                                    <option value='LB'>Lebanon</option>
                                    <option value='LS'>Lesotho</option>
                                    <option value='LR'>Liberia</option>
                                    <option value='LY'>
                                      Libyan Arab Jamahiriya
                                    </option>
                                    <option value='LI'>Liechtenstein</option>
                                    <option value='LT'>Lithuania</option>
                                    <option value='LU'>Luxembourg</option>
                                    <option value='MO'>Macau</option>
                                    <option value='MK'>
                                      Macedonia, The Former Yugoslav Republic of
                                    </option>
                                    <option value='MG'>Madagascar</option>
                                    <option value='MW'>Malawi</option>
                                    <option value='MY'>Malaysia</option>
                                    <option value='MV'>Maldives</option>
                                    <option value='ML'>Mali</option>
                                    <option value='MT'>Malta</option>
                                    <option value='MH'>Marshall Islands</option>
                                    <option value='MQ'>Martinique</option>
                                    <option value='MR'>Mauritania</option>
                                    <option value='MU'>Mauritius</option>
                                    <option value='YT'>Mayotte</option>
                                    <option value='MX'>Mexico</option>
                                    <option value='FM'>
                                      Micronesia, Federated States of
                                    </option>
                                    <option value='MD'>
                                      Moldova, Republic of
                                    </option>
                                    <option value='MC'>Monaco</option>
                                    <option value='MN'>Mongolia</option>
                                    <option value='MS'>Montserrat</option>
                                    <option value='MA'>Morocco</option>
                                    <option value='MZ'>Mozambique</option>
                                    <option value='MM'>Myanmar</option>
                                    <option value='NA'>Namibia</option>
                                    <option value='NR'>Nauru</option>
                                    <option value='NP'>Nepal</option>
                                    <option value='NL'>Netherlands</option>
                                    <option value='AN'>
                                      Netherlands Antilles
                                    </option>
                                    <option value='NC'>New Caledonia</option>
                                    <option value='NZ'>New Zealand</option>
                                    <option value='NI'>Nicaragua</option>
                                    <option value='NE'>Niger</option>
                                    <option value='NG'>Nigeria</option>
                                    <option value='NU'>Niue</option>
                                    <option value='NF'>Norfolk Island</option>
                                    <option value='MP'>
                                      Northern Mariana Islands
                                    </option>
                                    <option value='NO'>Norway</option>
                                    <option value='OM'>Oman</option>
                                    <option value='PK'>Pakistan</option>
                                    <option value='PW'>Palau</option>
                                    <option value='PA'>Panama</option>
                                    <option value='PG'>Papua New Guinea</option>
                                    <option value='PY'>Paraguay</option>
                                    <option value='PE'>Peru</option>
                                    <option value='PH'>Philippines</option>
                                    <option value='PN'>Pitcairn</option>
                                    <option value='PL'>Poland</option>
                                    <option value='PT'>Portugal</option>
                                    <option value='PR'>Puerto Rico</option>
                                    <option value='QA'>Qatar</option>
                                    <option value='RE'>Reunion</option>
                                    <option value='RO'>Romania</option>
                                    <option value='RU'>
                                      Russian Federation
                                    </option>
                                    <option value='RW'>Rwanda</option>
                                    <option value='KN'>
                                      Saint Kitts and Nevis
                                    </option>
                                    <option value='LC'>Saint LUCIA</option>
                                    <option value='VC'>
                                      Saint Vincent and the Grenadines
                                    </option>
                                    <option value='WS'>Samoa</option>
                                    <option value='SM'>San Marino</option>
                                    <option value='ST'>
                                      Sao Tome and Principe
                                    </option>
                                    <option value='SA'>Saudi Arabia</option>
                                    <option value='SN'>Senegal</option>
                                    <option value='SC'>Seychelles</option>
                                    <option value='SL'>Sierra Leone</option>
                                    <option value='SG'>Singapore</option>
                                    <option value='SK'>
                                      Slovakia (Slovak Republic)
                                    </option>
                                    <option value='SI'>Slovenia</option>
                                    <option value='SB'>Solomon Islands</option>
                                    <option value='SO'>Somalia</option>
                                    <option value='ZA'>South Africa</option>
                                    <option value='GS'>
                                      South Georgia and the South Sandwich
                                      Islands
                                    </option>
                                    <option value='ES'>Spain</option>
                                    <option value='LK'>Sri Lanka</option>
                                    <option value='SH'>St. Helena</option>
                                    <option value='PM'>
                                      St. Pierre and Miquelon
                                    </option>
                                    <option value='SD'>Sudan</option>
                                    <option value='SR'>Suriname</option>
                                    <option value='SJ'>
                                      Svalbard and Jan Mayen Islands
                                    </option>
                                    <option value='SZ'>Swaziland</option>
                                    <option value='SE'>Sweden</option>
                                    <option value='CH'>Switzerland</option>
                                    <option value='SY'>
                                      Syrian Arab Republic
                                    </option>
                                    <option value='TW'>
                                      Taiwan, Province of China
                                    </option>
                                    <option value='TJ'>Tajikistan</option>
                                    <option value='TZ'>
                                      Tanzania, United Republic of
                                    </option>
                                    <option value='TH'>Thailand</option>
                                    <option value='TG'>Togo</option>
                                    <option value='TK'>Tokelau</option>
                                    <option value='TO'>Tonga</option>
                                    <option value='TT'>
                                      Trinidad and Tobago
                                    </option>
                                    <option value='TN'>Tunisia</option>
                                    <option value='TR'>Turkey</option>
                                    <option value='TM'>Turkmenistan</option>
                                    <option value='TC'>
                                      Turks and Caicos Islands
                                    </option>
                                    <option value='TV'>Tuvalu</option>
                                    <option value='UG'>Uganda</option>
                                    <option value='UA'>Ukraine</option>
                                    <option value='AE'>
                                      United Arab Emirates
                                    </option>
                                    <option value='GB'>United Kingdom</option>
                                    <option value='US'>United States</option>
                                    <option value='UM'>
                                      United States Minor Outlying Islands
                                    </option>
                                    <option value='UY'>Uruguay</option>
                                    <option value='UZ'>Uzbekistan</option>
                                    <option value='VU'>Vanuatu</option>
                                    <option value='VE'>Venezuela</option>
                                    <option value='VN'>Viet Nam</option>
                                    <option value='VG'>
                                      Virgin Islands (British)
                                    </option>
                                    <option value='VI'>
                                      Virgin Islands (U.S.)
                                    </option>
                                    <option value='WF'>
                                      Wallis and Futuna Islands
                                    </option>
                                    <option value='EH'>Western Sahara</option>
                                    <option value='YE'>Yemen</option>
                                    <option value='YU'>Yugoslavia</option>
                                    <option value='ZM'>Zambia</option>
                                    <option value='ZW'>Zimbabwe</option>
                                  </select>
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
                                    onChange={setPurchase}
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
                                    <option value='kg'>kg</option>
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
                                      By sending a message to TRU MARKET, you
                                      agree to be contacted by our sales team
                                      via your specified contact information.
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
                    ) : collectionModule.second ? (
                      <div
                        className='row '
                        style={{
                          width: '900px',
                          padding: '30px 17px',
                          fontWeight: '400',
                          fontSize: '14px',
                          lineHeight: '22px',
                          backgroundColor: `${
                            modalState ? 'rgb(33, 43, 54)' : 'rgb(33, 43, 54)'
                          }`,
                          borderRadius: '10px',
                          overflowY: 'auto',
                          maxHeight: 'calc(100vh - 145px)',
                        }}
                      >
                        <p className='h3 text-light fw-bold'>Purchase Order</p>
                        <Card body className='personal_info mb-4'>
                          <div className='d-flex'>
                            <div
                              className='me-2'
                              style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundImage: `${
                                  photos && 'url(' + photos + ')'
                                }`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                              }}
                            ></div>
                            <div className='flex-grow-1 p-2 py-3'>
                              <p className='h6 text-success'>
                                {props.productId &&
                                  props.productId.data[0].title}
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
                                TRU MARKET Smart Contract
                              </span>{' '}
                              Only for the work you authorize.
                            </small>
                            <div className='payment-option mt-4'>
                              <p className='h5'>
                                Payment Option{' '}
                                <i className='fa fa-question'></i>
                              </p>
                              <p className='h6'>
                                Order total: <i className='fa fa-pencil'></i>
                              </p>
                              <p className='h6'>
                                US$ {localStorage?.measurementContract}.
                              </p>
                              <small>
                                This is the price you and the exporter have
                                agreed upon.
                              </small>
                            </div>

                            <div className='deposit mt-4'>
                              <p className='h5'>Deposit funds into Escrow</p>
                              <small className='text-muted'>
                                Escrow is a neutral holding place that protects
                                your deposit until work is approved.
                              </small>
                              <hr />
                              <p className='h4'>Buyer details</p>
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
                                  <td>Product name</td>
                                  <td>
                                    {props.productId &&
                                      props.productId.data[0].title}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Contact name</td>
                                  <td>{localStorage?.name}</td>
                                  <td>Purchase volume</td>
                                  <td>{purchaseVolume.current?.value}</td>
                                </tr>
                                <tr>
                                  <td>phone Number</td>
                                  <td>{userPhone}</td>
                                  <td>Port of loading</td>
                                  <td>{portLoading.current?.value}</td>
                                </tr>
                                <tr>
                                  <td>email</td>
                                  <td>{userEmail.current?.value}</td>
                                  <td>ETD</td>
                                  <td>
                                    {localStorage.shipment &&
                                      measureShipmentDate()}
                                  </td>
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
                                Escrow is a neutral holding place in the Smart
                                Contract that protects your deposit until work
                                is approved.
                              </small>
                            </div>
                            <hr />
                          </Card.Body>
                          <Card.Body>
                            <p className='h4'>Project Milestones</p>
                            <small className='text-muted'>
                              Add project milestones and pay in installments as
                              each milestone is completed to your satisfaction.
                            </small>
                            {mileStones.map((item, index) => (
                              <Task
                                key={item.id}
                                data={item}
                                selectOption={mileStones}
                                availableMilestones={availableMilestones}
                                isChanged={isChanged}
                                onSelectType={onSelectType}
                              />
                            ))}

                            {/* <Button
                              variant='success'
                              disabled={mileStones.length >= 5 && true}
                              onClick={addNewTask}
                            >
                              <i className='fa fa-plus'></i>
                            </Button> */}
                          </Card.Body>
                          <Card.Footer className='text-end'>
                            <Button variant='primary' onClick={handleShow}>
                              Submit
                            </Button>
                          </Card.Footer>
                        </Card>
                      </div>
                    ) : (
                      collectionModule.third && (
                        <div
                          show={show}
                          onHide={handleClose}
                          backdrop='static'
                          keyboard={false}
                          style={{
                            width: '900px',
                            padding: '30px 17px',
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '22px',
                            backgroundColor: 'rgb(33, 43, 54)',
                            borderRadius: '10px',
                            overflowY: 'auto',
                            maxHeight: 'calc(100vh - 145px)',
                            color: 'white',
                          }}
                        >
                          <Modal.Header>
                            <Modal.Title id='contained-modal-title-vcenter'>
                              Thank you for your order.
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
                                      "url('https://media.istockphoto.com/vectors/code-abstract-vector-modern-bar-code-sample-for-smartphone-scanning-vector-id1095468748?k=20&m=1095468748&s=612x612&w=0&h=QkNgbB839T27QTYllcNKGtTDQj8pgEQ5rjKs62HFXs4=')",
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
                                    {localStorage?.measurementContract}
                                  </span>
                                </div>
                                <div className='mb-2 fw-bold'>
                                  <span>Departed at: </span>
                                  <span className='dataSelected'>
                                    {localStorage.shipment &&
                                      measureShipmentDate()}
                                  </span>
                                </div>
                                <div className='mb-2 fw-bold'>
                                  <span>Arrived at: </span>
                                  <span className='dataSelected'>
                                    {localStorage.shipment &&
                                      measureArraialAt()}
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
                            <div class='flex-grow-1'>
                              <small>
                                These are your order details. Operation traced
                                by TRU MARKET Blockchain
                              </small>
                            </div>
                            <Button variant='primary' onClick={handleClose}>
                              Understood
                            </Button>
                          </Modal.Footer>
                        </div>
                      )
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
