import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers:
   {
    Authorization:
          "Bearer eklU-hfPQDqWDFXeDFELWP6eojY9opkznBiQJWxk5Q06bbHa-Z_C-HFMzQ0Jx2uWDZocBcFhHjrYj36JofVFY1L5swKWNQpyB_VmxGZA3PYA-Hy0OU3ANPa52rbVYHYx",
          // "Bearer MMMQuWnLGwlTYdSMtKujs774rvSF8-g78jwHgo35nIoahZ1df13ph_HxFOTGIpGD-_CVpb--RMaPA2clqd8koS8x58EPk6H9fkhW791Uws_LRizh44UyVyGh4feNX3Yx",
          // Authorization:
          //   "BearerMMMQuWnLGwlTYdSMtKujs774rvSF8-g78jwHgo35nIoahZ1df13ph_HxFOTGIpGD-_CVpb--RMaPA2clqd8koS8x58EPk6H9fkhW791Uws_LRizh44UyVyGh4feNX3Yx",
  },
});
