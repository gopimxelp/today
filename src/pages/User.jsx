// // import React,{useState} from 'react'
// // import CKEditor from '@ckeditor/ckeditor5-react';
// // import ClassicEditor  from '@ckeditor/ckeditor5-build-classic';
// // // import { ClassicEditor } from 'ckeditor5-custom-build';

// // const User = () => {
// //   const  [addData,setVal]=useState("");
// //   const  [addedData,showData]=useState(0);

// //   const handleDatachange=(e,editor)=>{
// //     const data=editor.getData();
// //     setVal(data)

// //   }

// //   return (
// //     <div>

// //       <h1>CK Editor</h1>

// //       <div style={{width:'700px',display:'inline-block',textAlign:'left'}}>
// //         <div style={{width:'700px',display:'inline-block',textAlign:'right',marginBottom:'5px'}}>
// //           <button style={{backgroundColor:'black',color:'white'}} onClick={()=>showData(!addedData)}>{addedData?'Hide Data':'Show Data'}</button>
// //         </div>

// //         <CKEditor editor={ClassicEditor} data={addData} onchange={handleDatachange} />

// //         <div>
// //           {addedData ? addData:''}
// //         </div>

// //       </div>
// //     </div>
// //   )
// // }

// // export default User

// // import React, { Component } from 'react';
// // import { CKEditor } from '@ckeditor/ckeditor5-react';
// // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// // class User extends Component {

// //     render() {
// //         return (
// //             <div className="App">

// //                 <CKEditor
// //                     editor={ ClassicEditor }
// //                     data="<p>Hello from CKEditor 5!</p>"
// //                     onReady={ editor => {
// //                         // You can store the "editor" and use when it is needed.
// //                         console.log( 'Editor is ready to use!', editor );
// //                     } }
// //                     onChange={ ( event, editor ) => {
// //                         const data = editor.getData();
// //                         console.log( { event, editor, data } );
// //                         <div>{data}</div>
// //                     } }
// //                     onBlur={ ( event, editor ) => {
// //                         console.log( 'Blur.', editor );
// //                     } }
// //                     onFocus={ ( event, editor ) => {
// //                         console.log( 'Focus.', editor );
// //                     } }
// //                 />

// //                 <div><data /></div>
// //             </div>
// //         );
// //     }
// // }

// // import React, { useState } from 'react'
// // import { useRef } from 'react';
// // import JoditEditor from 'jodit-react';

// // const User = () => {
// //     const editor=useRef(null)
// //     const [content,setContent]=useState('')

// //   return (
// //     <div>
// //         <JoditEditor class="text-start content-start h-[100vh]"
// // 			ref={editor}
// // 			value={content}

// // 			tabIndex={1} // tabIndex of textarea
// // 			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
// // 			onChange={newContent => setContent(newContent)}
// // 		/>
// //     </div>
// //   )
// // }

// // export default User;

// import React from 'react'
// import  { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import parse from "html-react-parser";
// import { AiOutlineMenu } from "react-icons/ai";
// import Table from 'react-bootstrap/Table';

// const User = () => {
//   const [data, setData] = useState({});

//   const [resultMsg, setResultMsg] = useState("");

//   const [usersList, setUsersList] = useState([]);
//   const [content, setContent] = useState("");

//   const [dropdown, setDropdown] = useState(false);

//   const [show, setShow]=useState(false)

//   useEffect(() => {
//     axios
//       .get("http://localhost:9000/content")
//       .then((response) => setData(response));
//   }, []);
//   useEffect(() => {
//     if (resultMsg === "User added successfully") {
//       getAPICALL();
//     } else {
//       setResultMsg("");
//     }
//   }, [resultMsg]);

//   useEffect(() => {
//     getAPICALL();
//   }, []);

//   console.log(usersList, "");
//   async function getAPICALL() {
//     const response = await fetch(`http://localhost:9000/content`, {
//       method: "get",
//       headers: {
//         "Content-type": "application/json",
//         Accept: "application/json",
//       },
//     });

//     const result = await response.json();

//     setUsersList(result);

//     console.log(result, "i am from get api call");
//   }
//   const onSubmit = (items) => {
//     setContent(items);
//   };

//   const openDrop = () => {
//     setDropdown(!dropdown);
//   };

//   let newContentsList = [];
//   const contents =
//     usersList &&
//     usersList?.map((each) =>
//       each.subtitle?.map((item, index) => {
//         newContentsList.push(item.content);
//       })
//     );

//   console.log(
//     newContentsList,
//     "newContentsListlkvmmmmmmmmmmmmmmmmmmmskdnvlksdgggggg"
//   );

//   const htmlFromCMS = newContentsList;
//   console.log(htmlFromCMS, "dangerous html i am cms .........................");
//   console.log(content, "content=====>");

//   return (
//     <div>User
//       {/* <div className="flex flex-row z-40 h-[100vh]  ">
//       <div className="w-[250px] bg-slate-50 h-[100vh] position-fixed overflow-scroll ">

//        <ul>
//         {usersList?.map((item) => (
//           <div>
//             <div
//               class="text-teal-900 text-8px   "
//               onClick={() => openDrop()}
//             >
//               <p>{item.title}</p>
//             </div>

//             {!dropdown ? (
//               <ul class="text-start text-blue-900 text-5px px-3 ">
//                 <li>
//                   {item &&
//                     item?.subtitle?.map((each) => (
//                       <div>
//                         <div
//                           onClick={() => {
//                             onSubmit(each.content);
//                             window.history.replaceState(
//                               null,
//                               "new title",
//                               `/${each.subtitlename}/${each._id}`
//                             );
//                           }}
//                         >
//                           {each.subtitlename}

//                         </div>

//                       </div>
//                     ))}
//                 </li>
//               </ul>
//             ) : null}
//           </div>
//         ))}</ul>

//       </div>
//       <div className="ml-[280px] text-center justify-center ">
//         <div>
//           <div class="mt-[6%] ">

//             <div class="border-2 border-green-400  ">{parse(content)}</div>
//             <Link to="/addpages" target="_parent" className="btn btn-danger w-20 mx-5">
//               Back
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//  */}

//     <div>

//                 <Table  class="my-3">
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Title</th>
//                             <th>Sub Title</th>

//                         </tr>
//                     </thead>
//                     <tbody>
//                     {usersList?.map((item) => (
//           <>

//                             <th>
//                                 <div class="text-blue-400">
//                                     <p>{item.id}</p>
//                                 </div>
//                             </th>
//                             <th>
//                                 <div>
//                                     <p>{item.title}</p>
//                                 </div>
//                             </th>

//             {!dropdown ? (
//               <>

//                   {item &&
//                     item?.subtitle?.map((each) => (

//                         <th
//                           onClick={() => {
//                             onSubmit(each.content);
//                             window.history.replaceState(
//                               null,
//                               "new title",
//                               `/${each.subtitlename}/${each._id}`
//                             );
//                           }}
//                         >
//                           <th>
//                                 <div>
//                                     <p>{each.subtitlename}</p>
//                                 </div>
//                             </th>

//                         </th>

//                     ))}
//                 </>

//             ) : null}
//           </>
//         ))}
//                     </tbody>

//                 </Table>
//                 <div className="ml-[280px] text-center justify-center ">
//         <div>
//           <div class="mt-[6%] ">

//             <div class="border-2 border-green-400  ">{parse(content)}</div>
//             <Link to="/addpages" target="_parent" className="btn btn-danger w-20 mx-5">
//               Back
//             </Link>
//           </div>
//         </div>
//       </div>

//             </div>
//     </div>
//   )
// }

// export default User;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Addpages.css";

import React from "react";

import JoditEditor from "jodit-react";

import { AiOutlineEye, AiOutlinePlusCircle } from "react-icons/ai";

import parse from "html-react-parser";

const User = () => {
  const [content, setContent] = useState("");

  const [counter, setCounter] = useState(null);

  const [validation] = useState(false);

  const [resultMsg, setResultMsg] = useState("");

  const [usersList, setUsersList] = useState([]);

  const [addSubtitle, setAddSubTitle] = useState(false);

  const [inputdisable, setInputDisable] = useState(false);

  const onSubmit = (items) => {
    setContent(items);
    
  };
  

  const [arr, setarr] = useState([]);
  const [data, setData] = useState({
    id: "",
    title: "",
    subtitle: "",
    content: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  console.log(data,'i amdata')
  

  const [finalArray, setFinalArray] = useState([]);

  const addSubtitleButtonClicked = (event) => {
    event.stopPropagation();

    setCounter(0);

    if (
      data &&
      data.subtitle.length > 0 &&
      (data.subtitle !== " " || data.subtitle !== "")
    ) {
      setInputDisable(true);
    }
  };

  const addContentButtonClicked = (event) => {
    event.stopPropagation();

    setCounter(1);

    if (data && data.content.length > 0) {
      setInputDisable(false);

      setFinalArray([
        ...finalArray,
        {
          subtitlename: data.subtitle,
          content: data.content,
        },
      ]);

      setData({
        ...data,
        subtitle: "",
        content: "",
      });
    }

    if (counter == 1) {
      setData({
        ...data,
        subtitle: "",
        content: "",
      });
    }
  };
  console.log(finalArray, "i am final array");

  console.log(counter, "i am counter value");

  const handlesubmit = (e) => {
    e.preventDefault();

    console.log("form submitted successfullly");

    const userDetailsObj = {
      id: data.id,
      title: data.title,
      subtitles: [
        {
          subtitlename: data.subtitle,
          content: data.content,
          ...finalArray,
        },
      ],
    };

    setarr([...arr, userDetailsObj]);
    console.log(userDetailsObj, "object details");

    /*>>>>>>>>>>>>>>>>>>>>>>>   API CALL TO ADD CONTENT  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    async function postAPICALL() {
      const response = await fetch("http://localhost:9000/add-content", {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userDetailsObj),
      });

      const result = await response.json();

      setResultMsg(result?.message);
      console.log(result, "backend post response");
    }

    postAPICALL();

    // .then(response => response.json())
    // .then(result => console.log(result, "backemnd post response"))
    // .catch(error => console.log('error', error));
  };

  async function getAPICALL() {
    const response = await fetch(`http://localhost:9000/content`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });

    const result = await response.json();

    setUsersList(result);

    console.log(result, "i am from get api call");
  }

  useEffect(() => {
    if (resultMsg === "User added successfully") {
      getAPICALL();
    } else {
      setResultMsg("");
    }
  }, [resultMsg]);

  useEffect(() => {
    getAPICALL();
  }, []);

  // const handleedit = (e) => {
  //   e.preventDefault();

  //   const userDetailsObj = {
  //     id: data.id,
  //     title: data.title,
  //     subtitles: [
  //       {
  //         subtitlename: data.subtitle,
  //         content: data.content,
  //       },
  //     ],
  //   };
  //   window.alert("Data edited successfully");

  //   setarr([...arr, userDetailsObj]);

  //   /*>>>>>>>>>>>>>>>>>>>>>>>   API CALL TO ADD CONTENT  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

  //   async function updateAPICALL() {
  //     const response = await fetch("http://localhost:9000/updatecontent/:id", {
  //       method: "put",
  //       headers: {
  //         "Content-type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(userDetailsObj),
  //     });

  //     const result = await response.json();

  //     setResultMsg(result?.message);
  //     console.log(result, "backend edit response");
  //   }

  //   updateAPICALL();

  //   // .then(response => response.json())
  //   // .then(result => console.log(result, "backemnd post response"))
  //   // .catch(error => console.log('error', error));
  // };

  let newContentsList = [];

  usersList &&
    usersList?.map((each) =>
      each.subtitle?.map((item) => {
        newContentsList.push(item.content);
      })
    );

  

  return (
    <div>
      <div className="row my-5">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card mt-5" style={{ textAlign: "left" }}>
              <div className="card-title text-center mt-3">
                <h2>Documentation Creation</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={data.id}
                        name="id"
                        onChange={handleChange}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        name="title"
                        onChange={handleChange}
                        className="form-control"
                      ></input>
                      {data.title.length === 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-row  align-items-center justify-around  mr-3">
                    <button
                      type="button"
                      onClick={() => {
                        setAddSubTitle(true);
                      }}
                    >
                      <label class="cursor-pointer">
                        Add Sub Title & Content
                      </label>
                      <span class="">
                        <button>{<AiOutlinePlusCircle />}</button>
                      </span>
                    </button>
                  </div>

                  <>
                    <div className="col-lg-12" disabled={inputdisable === true}>
                      <div className="form-group">
                        <div className="flex flex-row justify-between align-items-center mr-3">
                          <label class="flex">Sub Title </label>
                        </div>
                        <input
                          disabled={inputdisable === true}
                          value={data.subtitle}
                          name="subtitle"
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <br />
                    <br />

                    <button
                      class="flex flex-start bg-orange-400 w-40 h-8 text-center rounded my-2"
                      type="button"
                      onChange={handleChange}
                      onClick={addSubtitleButtonClicked}
                    >
                      Add Subtitle
                    </button>

                    <br />
                    <br />

                    <div>
                      <div className="App">
                        <label>Content</label>

                        <div>
                          <JoditEditor
                            disabled={true}
                            setReadonly={true}
                            class="text-start content-start h-[100vh]"
                            value={data.content}
                            onChange={(event) => {
                              console.log(event, "iam event");

                              setData({
                                ...data,
                                content: event,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <br />
                    <br />

                    <button
                      class="flex flex-start bg-orange-400 w-40 h-8 text-center rounded my-2"
                      type="button"
                      onClick={addContentButtonClicked}
                    >
                      Add Content
                    </button>
                  </>

                  <div className="col-lg-12 my-2">
                    <div className="form-group">
                      <button
                        className="btn bg-green-500 w-30 mx-5"
                        type="submit"
                        onClick={() => setAddSubTitle(false)}
                      >
                        Add
                      </button>
                      <Link
                        to="/"
                        className="btn btn-danger w-30 mx-5"
                        onClick={() => setAddSubTitle(false)}
                      >
                        Back to Home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div>
        <table class="table borderless">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Sub Title</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody className="">
            {usersList?.map((item) => (
              <tr class="border-2x solid black">
                <td>
                  <div class="text-blue-400">
                    <p>{item.id}</p>
                  </div>
                </td>

                <td>
                  <div>
                    <p>{item.title}</p>
                  </div>
                </td>

                {item &&
                  item?.subtitle?.map((each) => (
                    <td class="flex flex-col">
                      <div>
                        <p>{each.subtitlename}</p>
                      </div>
                    </td>
                  ))}

                <td className=" ">
                  {item &&
                    item?.subtitle?.map((each) => (
                      <td
                        onClick={() => {
                          onSubmit(each.content);
                          window.history.replaceState(
                            null,
                            "new title",
                            `/${each.subtitlename}/${each._id}`
                          );
                        }}
                        class="flex  flex-col align-middle justify-center items-center mt-3"
                      >
                        {" "}
                        <div>
                          <AiOutlineEye className="" />
                        </div>
                      </td>
                    ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" text-center justify-center ">
        <div>
          <div class="mt-[6%] ">
            <div class="border-2 border-green-400  ">{parse(content)}</div>
            <Link
              to="/addpages"
              target="_parent"
              className="btn btn-danger w-20 mx-5"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default User;
