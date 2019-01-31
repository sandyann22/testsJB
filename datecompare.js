



function dateDiff(date1, date2)
{                     
    var tmp = (date2 - date1)/1000;
    return tmp;
}

module.exports = {dateDiff: dateDiff};