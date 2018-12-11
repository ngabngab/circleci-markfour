import React, { Fragment } from 'react';

export default function LoaderComponent() {
  return (
    <Fragment>
        <div className='container-full d-flex justify-content-center align-items-center'>
            <div className='loading d-flex flex-column w-100 align-items-center'>
                
                <div className='loading-container'>
                    <svg viewBox="0 0 51 50">

                        <rect y="0" width="13" height="50" fill="#1fa2ff">
                            <animate attributeName="height" values="50;10;50" begin="0s" dur="1s" repeatCount="indefinite" />
                            <animate attributeName="y" values="0;20;0" begin="0s" dur="1s" repeatCount="indefinite" />
                        </rect>

                        <rect x="19" y="0" width="13" height="50" fill="#12d8fa">
                            <animate attributeName="height" values="50;10;50" begin="0.2s" dur="1s" repeatCount="indefinite" />
                            <animate attributeName="y" values="0;20;0" begin="0.2s" dur="1s" repeatCount="indefinite" />
                        </rect>

                        <rect x="38" y="0" width="13" height="50" fill="#06ffcb">
                            <animate attributeName="height" values="50;10;50" begin="0.4s" dur="1s" repeatCount="indefinite" />
                            <animate attributeName="y" values="0;20;0" begin="0.4s" dur="1s" repeatCount="indefinite" />
                        </rect>

                    </svg>
                </div>
                <div className="loading-text mt-4">
                    <h2>Redirecting . . .</h2>
                </div>

            </div>
        </div>
    </Fragment>
  )
}
