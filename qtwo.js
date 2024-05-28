const Students = {
    Khabib: {
        name: "Khabib Shrestha",
        address: {
            permanent: "Dagestan, Russiaa",
            temporary: "Mid-baneshwor, Kathmandu"
        },
        phone: {
            mobile: "9860504398",
            home: "5576844"
        },
        email: "khabib@gmail.com"
    },
    Manny: {
        name: "Manny Poudel",
        address: {
            permanent: "General Santos, Philippines",
            temporary: null
        },
        phone: {
            mobile: "9801244554",
            home: null
        },
        email: "manny@yahoo.com"
    },
    Connor: {
        name: "Connor Maharjan",
        address: {
            permanent: null,
            temporary: "Khasibazar, Kathmandu"
        },
        phone: {
            mobile: null,
            home: "5564990"
        },
        email: "connor@hotmail.com"
    },
    Buakaw:{
        name: "Buakaw Rajbanshi",
        address: {
            permanent: "Pattaya, Thailand",
            temporary: "Pepsicola, Bhaktapur"
        },
        phone: {
            mobile: "9841546433",
            home: "4428767"
        },
        email: "r.buakaw@gmail.com"
    },
    Paddy:{
        name: "Paddy Pahadi",
        address:{
            permanent: null,
            temporary: "Mid-thimi, Bhaktapur"
        },
        phone:{
            mobile: null,
            home: "4456477"
        },
        email: "paddy@protonmail.ch"
    }
};

console.log("Khabib's home phone number: ", Students.Khabib.phone.home);
console.log("Manny's permanent address: ", Students.Manny.address.permanent);
console.log("Connor's temporary address: ", Students.Connor.address.temporary);
console.log("Buakaw's temporary address: ", Students.Connor.address.temporary);
console.log("Buakaw's email: ", Students.Buakaw.email);
console.log("Paddy's permament address: ", Students.address.permanent);
console.log("Connor's permanent address: ",Students.Connor.address.permanent);