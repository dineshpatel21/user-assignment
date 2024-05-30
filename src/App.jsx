import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

export default function App() {
  // 1 blue
  // 2 red
  // 3 yellow
  // 4 green
  // 5 white

  // loop

  const [clickCount, setClickCount] = useState(0);
  const [userData, setUserData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const changeThemeColor = (clickCount) => {
    switch (clickCount) {
      case 1:
        document.body.style.backgroundColor = "blue";
        break;
      case 2:
        document.body.style.backgroundColor = "red";
        break;
      case 3:
        document.body.style.backgroundColor = "yellow";
        break;
      case 4:
        document.body.style.backgroundColor = "green";
        break;
      case 5:
        document.body.style.backgroundColor = "white";

        break;
    }
  };
  // https://jsonplaceholder.typicode.com/users

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((value) => {
        console.log(value);

        const newValue = value.map((item, index) => {
          return {
            ...item,
            isCompanyShow: false,
            isAddressShow: false,
            isGeoShow: false,
          };
        });
        setUserData(value);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    changeThemeColor(clickCount);
    if (clickCount > 5) {
      setClickCount(1);
    }
  }, [clickCount]);

  const countClickCount = () => {
    setClickCount(clickCount + 1);
  };

  const handleCompanyHover = (item, idx) => {
    const newValue = userData.map((item, index) => {
      return {
        ...item,
        isCompanyShow: idx === index,
        isAddressShow: false,
        isGeoShow: false,
      };
    });

    setUserData(newValue);
  };

  const handleCompanyLeave = (item, idx) => {
    const newValue = userData.map((item, index) => {
      return {
        ...item,
        isCompanyShow: false,
        isAddressShow: false,
        isGeoShow: false,
      };
    });

    setUserData(newValue);
  };

  const handleAddressHover = (item, idx) => {
    const newValue = userData.map((item, index) => {
      return {
        ...item,
        isAddressShow: idx === index,
        isCompanyShow: false,
        isGeoShow: false,
      };
    });

    setUserData(newValue);
  };

  const handleAddressLeave = (item, idx) => {
    const newValue = userData.map((item, index) => {
      return {
        ...item,
        isAddressShow: false,
        isCompanyShow: false,
        isGeoShow: false,
      };
    });

    setUserData(newValue);
  };

  const handleGeoHover = (item, idx) => {
    const newValue = userData.map((item, index) => {
      return {
        ...item,
        isGeoShow: idx === index,
        isCompanyShow: false,
        isAddressShow: false,
      };
    });

    setUserData(newValue);
  };

  const handleGeoLeave = (item, idx) => {
    const newValue = userData.map((item, index) => {
      return {
        ...item,
        isGeoShow: false,
        isCompanyShow: false,
        isAddressShow: false,
      };
    });

    setUserData(newValue);
  };

  return (
    <div className={styles.container}>
      <button onClick={fetchData}>fetch</button>

      <table className={styles.table}>
        <tr>
          <th className={styles.th}>Name</th>
          <th className={styles.th}>Username</th>
          <th className={styles.th}>Email</th>
          <th className={styles.th}>Phone</th>
          <th className={styles.th}>Website</th>
          <th className={styles.th}>Company</th>
          <th className={styles.th}>Address</th>
          <th className={styles.th}>Geo</th>
        </tr>

        {userData.map((item, index) => {
          const address = item.address;
          const company = item.company;
          const { name, catchPhrase, bs } = company;
          const { geo, zipcode, city, suite, street } = address;
          const { lat, lng } = geo;

          return (
            <tr key={index}>
              <td className={styles.td}>{item.name}</td>
              <td className={styles.td}>{item.username}</td>
              <td className={styles.td}>{item.email}</td>
              <td className={styles.td}>{item.phone}</td>
              <td className={styles.td}>{item.website}</td>
              <td
                onMouseOver={() => handleCompanyHover(item, index)}
                onMouseLeave={() => handleCompanyLeave(item, index)}
                // className={styles.addressStyle}
              >
                company
                {item.isCompanyShow && (
                  <div className={styles.popup}>
                    <p>{name}</p>
                    <p>{catchPhrase}</p>
                    <p>{bs}</p>
                  </div>
                )}
              </td>
              <td
                onMouseOver={() => handleAddressHover(item, index)}
                onMouseLeave={() => handleAddressLeave(item, index)}
                // className={styles.companyStyle}
              >
                address
                {item.isAddressShow && (
                  <div className={styles.popup}>
                    <p>{street}</p>
                    <p>{suite}</p>
                    <p>{city}</p>
                    <p>{zipcode}</p>
                  </div>
                )}
              </td>

              <td
                onMouseOver={() => handleGeoHover(item, index)}
                onMouseLeave={() => handleGeoLeave(item, index)}
                // className={styles.companyStyle}
              >
                Geo
                {item.isGeoShow && (
                  <div className={styles.popup}>
                    <p>lat : {lat}</p>
                    <p>lng : {lng}</p>
                  </div>
                )}
              </td>
            </tr>
          );

          // return <div key={index} style={{display:"flex"}}>
          //   {/* <div >{item.name}</div>;
          //   <div >{item.username}</div>;
          //   <div >{item.email}</div>;
          //   <div >{item.phone}</div>;
          //   <div >{item.website}</div>;
          //   <div >{item.name}</div>; */}

          // </div>
        })}
      </table>
    </div>
  );
}
