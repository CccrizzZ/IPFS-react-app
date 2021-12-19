import React, { Component } from 'react'
import { create, urlSource } from 'ipfs-http-client'

// create ipfs http-client
const client = create("http://localhost:5001")



export default class Upload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null,
            hash: null
        }
        
    }

    // update target file
    onFileChange = (event) => {
        this.setState({ selectedFile: event.target.files[0]})
    }

    // upload to IPFS
    upload = async () => {
        // console.log(await client.version())

        // for await (const result of client.add(this.state.selectedFile)) {               
        //     console.log(result)
        //     this.setState({hash: result.path})
        // }
    
        let hash = await client.add(this.state.selectedFile)
        console.log(hash)
    }

    render() {
        return (
            <div>
                <h1>IPFS Upload</h1>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.upload}>Upload</button>
            </div>
        )
    }
}
