import React from 'react'
import './contact.css'
import { useAuth0 } from '@auth0/auth0-react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
const Contact = () => {
    const { isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <>
            <div class="col-sm-4">
            <div class="card">
              <div class="image">
                <img src="http://loremflickr.com/320/150?random=4" alt=""/>
              </div>
              <div class="card-inner">
                <div class="header">
                  <h2>Title</h2>
                  <h3>Sub-Head</h3>
              </div>
              <div class="content">
                <p>Content area</p>
              </div>
                </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="image">
                <img src="http://loremflickr.com/320/150?random=5" alt=""/>
              </div>
              <div class="card-inner">
                <div class="header">
                  <h2>Title</h2>
                  <h3>Sub-Head</h3>
              </div>
              <div class="content">
                <p>Content area</p>
              </div>
                </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="image">
                <img src="http://loremflickr.com/320/150?random=6" alt=""/>
              </div>
              <div class="card-inner">
                <div class="header">
                  <h2>Title</h2>
                  <h3>Sub-Head</h3>
              </div>
              <div class="content">
                <p>Content area</p>
              </div>
                </div>
            </div>
          </div><div class="col-sm-4">
            <div class="card">
              <div class="image">
                <img src="http://loremflickr.com/320/150?random=2" alt=""/>
              </div>
              <div class="card-inner">
                <div class="header">
                  <h2>Title</h2>
                  <h3>Sub-Head</h3>
              </div>
              <div class="content">
                <p>Content area</p>
              </div>
                </div>
            </div>
          </div><div class="col-sm-4">
            <div class="card">
              <div class="image">
                <img src="http://loremflickr.com/320/150?random=3" alt=""/>
              </div>
              <div class="card-inner">
                <div class="header">
                  <h2>Title</h2>
                  <h3>Sub-Head</h3>
              </div>
              <div class="content">
                <p>Content area</p>
              </div>
                </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="image">
                <img src="http://loremflickr.com/320/150" alt=""/>
              </div>
              <div class="card-inner">
                <div class="header">
                  <h2>Title</h2>
                  <h3>Sub-Head</h3>
              </div>
              <div class="content">
                <p>Content area</p>
              </div>
                </div>
            </div>
          </div>
            </>
        )
    )
}

export default Contact
