const getDate = ()=>{
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDatetime = new Date();
    return monthNames[(currentDatetime.getMonth())].toUpperCase()+' / '+currentDatetime.getDate()+' / '+currentDatetime.getFullYear()
}
export default getDate 