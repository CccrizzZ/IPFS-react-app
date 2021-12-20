import React, { Component } from 'react'
import { create } from 'ipfs-http-client'

// create ipfs http-client
// const client = create("http://localhost:5001")
const client = create("https://ipfs.infura.io:5001/api/v0")
console.log(client)

export default class Upload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null,
            hash: null
        }
        
    }

    // update target file
    onFileChange =  (event) => {
        this.setState({ selectedFile: event.target.files[0]})

    }

    // upload to IPFS
    upload = async (event) => {

        console.log("upload pressed")
        console.log(await client.version())
    

        let hash = await client.add(this.state.selectedFile)
        console.log(hash.path)
        this.setState({ hash: hash.path })
    }

    render() {
        return (
            <div>
                <h1>IPFS Upload</h1>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.upload}>Upload</button>
                <hr/>
                <img alt="upload" src={`https://ipfs.infura.io:5001/api/v0/cat?arg=${this.state.hash}`} />
            </div>
        )
    }
}
