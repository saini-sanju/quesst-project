import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./skeletons.css";

const Skeletons = () => {
  return (
    <div className="ms-3 mt-3">
      <div className="mt-3 pt-3 shadow" style={{ marginLeft: "-1rem" }}>
        <div className="ms-3">
          <Skeleton className="mt-3" height="20%" width="20%" />
          <Skeleton className="mt-3" height="20%" width="30%" />
          <Skeleton height="20%" width="20%" />
          <div className="d-flex mt-3">
            <Skeleton circle={true} height={30} width={30} />
            <div className="ms-3">
              <Skeleton height={15} width={100} />
              <div className="d-flex">
                <Skeleton height={15} width={100} />
                <div className="mb-5">
                  <div className="d-flex" style={{ marginLeft: "8rem" }}>
                    <Skeleton className="ms-0" height={10} width={25} />
                    <Skeleton className="ms-3" height={10} width={25} />
                    <Skeleton className="ms-3" height={10} width={25} />
                    <Skeleton className="ms-3" height={10} width={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeletons;
