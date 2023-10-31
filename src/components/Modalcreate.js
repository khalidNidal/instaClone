import React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import axios from "axios";
import { Box, Textarea, Typography } from "@mui/joy";

const token = localStorage.getItem("token");
function Modalcreate() {
  const [i, seti] = useState(null);
  const [open, setOpen] = useState(false);
  const [image, setimage] = useState(null);
  const [data, setdata] = useState([{ title: "", description: "" }]);
  const handleimgchange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      seti(reader.result);
    };
    reader.readAsDataURL(file);
    setimage(file);
  };

  let formdata = new FormData();
  formdata.append("image", image);
  formdata.append("description", data.description);

  function handlesubmit(event) {
    axios
      .post("http://16.170.173.197/posts", formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  }
  return (
    <>
      <Box className="icons" onClick={() => setOpen(true)}>
        <AddCircleOutlineIcon style={{ fontSize: 30 }} className="Icon" />

        <Typography sx={{ color: "white" }}>Create</Typography>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog sx={{ background: "black", color: "white" }}>
          <Typography style={{ textAlign: "center", color: "white" }}>
            new post
          </Typography>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack sx={{ paddingX: "200px", paddingY: "50px" }} spacing={2}>
              <FormControl sx={{ width: "500px" }}>
                <FormLabel sx={{ color: "white" }}>Description</FormLabel>
                <Textarea
                  required
                  onChange={(e) => {
                    setdata({ ...data, description: e.target.value });
                  }}
                  minRows={10}
                  variant="solid"
                  size="lg"
                  color="neutral"
                />
              </FormControl>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FormControl>
                  <Button
                    sx={{ margin: "10px", width: "max-content" }}
                    component="label"
                  >
                    choose pic
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleimgchange}
                      style={{ display: "none" }}
                    />
                  </Button>
                </FormControl>
                {image != null && <img src={i} width={200} height={200} />}

                <Button
                  onClick={() => {
                    handlesubmit();
                  }}
                  type="submit"
                  style={{ margin: "20px" }}
                >
                  Submit
                </Button>
              </Box>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}

export default Modalcreate;

// import React, { useState } from "react";
// import Button from "@mui/joy/Button";
// import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
// import Input from "@mui/joy/Input";
// import Modal from "@mui/joy/Modal";
// import ModalDialog from "@mui/joy/ModalDialog";
// import DialogTitle from "@mui/joy/DialogTitle";
// import Stack from "@mui/joy/Stack";
// import { Link } from "react-router-dom";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import { Box, color } from "@mui/system";
// import { Typography } from "@mui/material";
// import { Textarea } from "@mui/joy";
// import axios from "axios";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// const token = localStorage.getItem("token");

// function Modalcreate() {

//   const [open, setOpen] = useState(false);
//   const [image, setimage] = useState(null);
//   const [data, setdata] = useState([{ title: "", description: "" }]);

//   const handleimgchange = (event) => {
//     const file = event.target.files[0];
//     setimage(file);
//     // console.log(read);
//   };

//   let formdata = new FormData();
//   formdata.append("image", image);
//   formdata.append("description", data.description);

//   function handlesubmit(event) {
//     axios
//       .post("http://16.170.173.197/posts", formdata, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((erorr) => {
//         console.log(erorr);
//       });
//   }

//   return (
//     <>
//       <Box className="icons" onClick={() => setOpen(true)}>
//         <AddCircleOutlineIcon style={{ fontSize: 30 }} className="Icon" />

//         <Typography>Create</Typography>
//       </Box>
//       <Modal open={open} onClose={() => setOpen(false)}>
//         <ModalDialog sx={{ background: "black", color: "white" }}>
//           <Typography style={{ textAlign: "center" }}>new post</Typography>
//           <form
//             onSubmit={(event) => {
//               event.preventDefault();
//               setOpen(false);
//             }}
//           >
//             <Stack sx={{ paddingX: "200px", paddingY: "50px" }} spacing={2}>

//               <FormControl sx={{ width: "500px" }}>
//                 <FormLabel sx={{ color: "white" }}>Description</FormLabel>
//                 <Textarea
//                 required
//                 onChange={(e) => {
//                   setdata({ ...data, description: e.target.value });
//                 }}
//                 minRows={10} variant="solid" size="lg" color="neutral"/>
//               </FormControl>

//               <Box sx={{  display:'flex' , flexDirection:'column' ,alignItems:'center' }}>

//                 <Button   component="label" sx={{ margin: "50px" ,width: 'max-content'  }}>choose image

//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleimgchange}
//                       style={{ display: "none" }}
//                     />
//                 </Button>

//                 {image != null && <img src={image} />}

//                 <Button sx={{width: 'max-content'}} type="submit"
//                  onClick={() => {
//                   handlesubmit();
//                 }}
//                 >
//                   Submit
//                 </Button>
//               </Box>
//             </Stack>
//           </form>
//         </ModalDialog>
//       </Modal>
//     </>
//   );
// }

// export default Modalcreate;

// // import React from "react";
// // import Button from "@mui/joy/Button";
// // import FormControl from "@mui/joy/FormControl";
// // import FormLabel from "@mui/joy/FormLabel";
// // import Input from "@mui/joy/Input";
// // import Modal from "@mui/joy/Modal";
// // import ModalDialog from "@mui/joy/ModalDialog";
// // import DialogTitle from "@mui/joy/DialogTitle";
// // import Stack from "@mui/joy/Stack";
// // import { Link } from "react-router-dom";
// // import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// // import { styled } from "@mui/material/styles";
// // import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// // import { useState } from "react";
// // import axios from "axios";

// // const token = localStorage.getItem("token");
// // function Modalcreate() {
// //   const [open, setOpen] = React.useState(false);
// //   const [image, setimage] = useState(null);
// //   const [data, setdata] = useState([{ title: "", description: "" }]);
// //   const handleimgchange = (event) => {
// //     const file = event.target.files[0];
// //     setimage(file);
// //     // console.log(read);
// //   };
// //   let formdata = new FormData();
// //   formdata.append("image", image);
// //   formdata.append("description", data.description);

// //   function handlesubmit(event) {
// //     axios
// //       .post("http://16.170.173.197/posts", formdata, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           "Content-Type": "multipart/form-data",
// //         },
// //       })
// //       .then((response) => {
// //         console.log(response);
// //       })
// //       .catch((erorr) => {
// //         console.log(erorr);
// //       });
// //   }
// //   return (
// //     <React.Fragment>
// //       <div className="navitem" onClick={() => setOpen(true)}>
// //         <AddCircleOutlineIcon sx={{ fontSize: 30 }} />

// //         <p>Create</p>
// //       </div>
// //       <Modal open={open} onClose={() => setOpen(false)}>
// //         <ModalDialog>
// //           <DialogTitle>Create new post</DialogTitle>
// //           <form
// //             onSubmit={(event) => {
// //               event.preventDefault();
// //               setOpen(false);
// //             }}
// //           >
// //             <Stack spacing={2}>
// //               <FormControl>
// //                 <FormLabel>Title</FormLabel>
// //                 <Input
// //                   autoFocus
// //                   required
// //                   onChange={(e) => {
// //                     setdata({ ...data, title: e.target.value });
// //                   }}
// //                 />
// //               </FormControl>
// //               <FormControl>
// //                 <FormLabel>Body</FormLabel>
// //                 <Input
// //                   required
// //                   onChange={(e) => {
// //                     setdata({ ...data, description: e.target.value });
// //                   }}
// //                 />
// //               </FormControl>
// //               <FormControl>
// //                 <Button
// //                   component="label"
// //                   variant="contained"
// //                   startIcon={<CloudUploadIcon />}
// //                 >
// //                   Upload file
// //                   <input
// //                     type="file"
// //                     accept="image/*"
// //                     onChange={handleimgchange}
// //                     style={{ display: "none" }}
// //                   />
// //                 </Button>
// //               </FormControl>
// //               {image != null && <img src={image} />}
// //               {/* <img src={image} /> */}
// //               <Button
// //                 onClick={() => {
// //                   handlesubmit();
// //                 }}
// //                 type="submit"
// //               >
// //                 Submit
// //               </Button>
// //             </Stack>
// //           </form>
// //         </ModalDialog>
// //       </Modal>
// //     </React.Fragment>
// //   );
// // }

// // export default Modalcreate;
