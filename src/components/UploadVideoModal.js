import React from "react";
import { Web3Storage } from "web3.storage";
import styles from '../styles/UploadVideoModal.module.css'
import { getFilesFromPath } from 'web3.storage';

const UploadVideoModal = ({
    description,
    videoUrl,
    setDescription,
    setVideoUrl,
    setNewVideoShow
}) => {
    function jsonFile(filename, obj) {
        return new File([JSON.stringify(obj)], filename)
      }
    const namePrefix = "VideoGallery"
    async function selectedFile(fileLocation){
        const metadataFile = jsonFile('metadata.json', {
            path:  document.getElementById("fileob").files[0].filename
            
          })
          const uploadName = namePrefix 
          const web3storage = new Web3Storage({token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGY5MzQ2NUZhZDEzMGNDMEJCODA2ODVBRUJkRDU1MTQ2MDI1MjNjNjIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzYyNzQwNDg3OTksIm5hbWUiOiJzb2Npb2ZpIn0.OBrPGBVfW6qJYczug5ZsimcibJGOb3pXNSq0mRYCD6Y'})
          const selectedFile = document.getElementById("fileob").files[0]
          const cid = await web3storage.put([selectedFile, metadataFile], {
            // the name is viewable at https://web3.storage/files and is included in the status and list API responses
            name: uploadName,
        
            // onRootCidReady will be called as soon as we've calculated the Content ID locally, before uploading
            
          })
          console.log(cid)
          console.log(selectedFile)
          const imageURI = `https://${cid}.ipfs.w3s.link/${encodeURIComponent(selectedFile.name)}`
          console.log(imageURI)
        }

    return(
        <div className ={styles.wrapper}>
            <div className={styles.title}>Upload New Video </div>
            <div className={styles.inputField}>
                <div className={styles.inputTitle}>Description</div>
                <div className={styles.inputContainer}>
                    <input
                    className={styles.input}
                    type = 'text'
                    value = {description}
                    onChange = {(e=>setDescription(e.target.value))}
                    />
                </div>
            </div>
            <div className={styles.inputField}>
                <div className={styles.inputTitle}>Video Url</div>
                <div className={styles.inputContainer}>
                    <input
                    id="fileob"
                    // onPaste={e => {
                    //     selectedFile(e.target.value)
                    // }}
                    className={styles.input}
                    type = 'file'
                    //value = {videoUrl}
                    onChange = {e => {
                        selectedFile(e.target.value)
                    }}
                    />
                </div>
            </div>
            <div className={styles.modalButtons}>
                <button 
                onClick={()=>{
                    setDescription('');
                    setVideoUrl('');
                    setNewVideoShow(false)
                }}
                className = {`${styles.button} ${styles.cancelButton}`}
                >
                    Cancel 
                </button>
                <button 
                // onClick={newVideo}
                className = {`${styles.button} ${styles.createButton}`}
                >
                    Create  
                </button>
            </div>
        </div>
    )
}

export default UploadVideoModal;