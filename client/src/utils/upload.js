import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "skillsharemarket");

  try {
    const res = await axios.post(
      "PUT YOUR KEY HERE FROM CLOUDINARY",
      data
    );

    const {url} = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
