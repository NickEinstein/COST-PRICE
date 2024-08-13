import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { post, del } from "services/fetchDocuments";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const PictureWall = ({ images = [] }) => {
  const { id } = useParams();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([
    // {
    //   uid: "-1",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   uid: "-2",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   uid: "-3",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   uid: "-4",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   uid: "-xxx",
    //   percent: 50,
    //   name: "image.png",
    //   status: "uploading",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   uid: "-5",
    //   name: "image.png",
    //   status: "error",
    // },
  ]);

  useEffect(() => {
    setFileList(
      images?.map((e, idx) => ({
        uid: e?.id,
        name: idx + 1,
        status: "done",
        url: e?.image,
      }))
    );
  }, [images]);

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    // setproductDetails({
    //   ...productDetails,
    //   images: [...productDetails?.images, info.file.originFileObj],
    // });
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => {
    // console.log(newFileList);
    addProductImage(newFileList);
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const toRemoveFile = async (file) => {
    const res = await del({
      endpoint: `product/image/update/${file?.uid}`,
      // body: formData,
      // auth: false,
    });
  };

  const addProductImage = async (file) => {
    let newFile = file[file.length - 1]?.originFileObj;
    console.log(file);

    const formData = new FormData();
    formData.append("product_id", id);
    formData.append("image", newFile);
    let kk = {
      uid: '-xxx',
      // res.data.data?.id,
      percent: 50,
      name: "image.png",
      status: "uploading",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    };
    setFileList([...fileList, kk]);

    const res = await post({
      endpoint: `product/image/add`,
      body: formData,
      auth: true,
    });

    if (res?.status == "201") {
      console.log(res.data.data?.image);
      let display = {
        uid: res.data.data?.image?.id,
        name: "image.png",
        status: "done",
        url:res.data.data?.image,
      };
    }

    console.log(res);
  };
  return (
    <>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={(file) => toRemoveFile(file)}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};
export default PictureWall;
