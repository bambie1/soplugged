import Image from "next/image";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const FileDropzone = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file: any) => (
    <div key={file.name}>
      <div>
        <Image src={file.preview} alt="preview" width={30} height={40} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>{thumbs}</aside>
    </section>
  );
};

export default FileDropzone;
