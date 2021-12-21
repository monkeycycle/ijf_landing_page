console.log("init search.js");

// Check URL for search params otherwise wait for form submission.
const form_search  = document.getElementById('ijf-db-search-header');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchType = urlParams.get('searchtype');
const esIndex = 'politicaldonations';
const es_domain = "https://search-ijf-data-es-ynepg6hutnwfrumwyjapgxajuq.us-east-1.es.amazonaws.com/" + esIndex + "/_search";
const page_size = 500;


if(searchType !== '' && searchType == 'simple'){
    console.log("searchType::: " + searchType);
    console.log("Do simple search now");
    const form_search__terms  = urlParams.get('terms');
    const form_search__regions  = urlParams.get('regions');

    if(form_search__terms !== ""){

        let query_url = es_domain + "?size=" + page_size;
        query_url += "&q=" + form_search__terms + "+" + form_search__regions;        

        axios.get(query_url, {
            auth: {
                username: 'ijf-data-user',
                password: 'species reunion -5Molasses gauging evidence'
            },
            }).then((res) => {
               console.log(res);
               renderResults(res);
            });
                
    }

}
else if(searchType !== '' && searchType == 'advanced'){
    console.log("searchType::: " + searchType);
    console.log("Do advanced search now");
    const form_search__donor_value_uri = urlParams.get("donor");
    const form_search__recipient_value_uri = urlParams.get("recipient");
    const form_search__donor_type_value_uri = urlParams.get("donor_type");
    const form_search__regions_value_uri = urlParams.get("region");
    const form_search__year_value_uri = urlParams.get("year");
    const form_search__politicalparty_value_uri = urlParams.get("politicalparty");
    const form_search__amount_value_uri = urlParams.get("amount");

    document.getElementById("ijf-db-search--donor").value = form_search__donor_value_uri; 
    document.getElementById("ijf-db-search--recipient").value = form_search__recipient_value_uri; 
    document.getElementById("ijf-db-search--donor-type").value = form_search__donor_type_value_uri; 
    document.getElementById("ijf-db-search--region").value = form_search__regions_value_uri; 
    document.getElementById("ijf-db-search--year").value = form_search__year_value_uri; 
    document.getElementById("ijf-db-search--politicalparty").value = form_search__politicalparty_value_uri; 
    document.getElementById("ijf-db-search--amount").value = form_search__amount_value_uri;     

    let query_url = es_domain + "?size=" + page_size + "&q=";
    // query_url += "?=Id:";
    
    let query_url_str = '';

    if(form_search__donor_value_uri != null){ 
        if(query_url_str != ''){
            query_url_str +=  "&contributor:" + form_search__donor_value_uri; 
        }
        else{
            query_url_str +=  "contributor:" + form_search__donor_value_uri; 
        }

    }

    if(form_search__recipient_value_uri != null){ 
        
        if(query_url_str != ''){
            query_url_str +=  "&recipient:" + form_search__recipient_value_uri; 
        }
        else{
            query_url_str +=  "recipient:" + form_search__recipient_value_uri; 
        }        
    }

    if(form_search__donor_type_value_uri != null && form_search__donor_type_value_uri != "Type"){ 
        if(query_url_str != ''){
            query_url_str +=  "&contributor_type:" + form_search__donor_type_value_uri; 
        }
        else{
            query_url_str +=  "contributor_type:" + form_search__donor_type_value_uri; 
        }               
        
    }

    if(form_search__regions_value_uri != null && form_search__regions_value_uri != "Region"){ 
        if(query_url_str != ''){
            query_url_str +=  "&source:" + form_search__regions_value_uri; 
        }
        else{
            query_url_str +=  "source:" + form_search__regions_value_uri; 
        }        
        
    }

    if(form_search__year_value_uri != null && form_search__year_value_uri != "Year"){ 
        if(query_url_str != ''){
            query_url_str +=  "&year:" + form_search__year_value_uri; 
        }
        else{
            query_url_str +=  "year:" + form_search__year_value_uri; 
        }            
        
    }

    if(form_search__politicalparty_value_uri != null && form_search__politicalparty_value_uri != 'Political Party'){ 
        if(query_url_str != ''){
            query_url_str +=  "&political_party:" + form_search__politicalparty_value_uri; 
        }
        else{
            query_url_str +=  "political_party:" + form_search__politicalparty_value_uri; 
        }            
        
    }

    if(form_search__amount_value_uri != null && form_search__amount_value_uri != 'Amount'){ 
        
        if(query_url_str != ''){
            query_url_str +=  "&total_amount:" + form_search__amount_value_uri; 
        }
        else{
            query_url_str +=  "total_amount:" + form_search__amount_value_uri; 
        }   

    }

    query_url = query_url + query_url_str

    // query_url += "+" + form_search__recipient_value_uri;
    // query_url += "+" + form_search__donor_type_value_uri;
    // query_url += "+" + form_search__regions_value_uri;
    // query_url += "+" + form_search__year_value_uri;
    // query_url += "+" + form_search__politicalparty_value_uri;
    // query_url +=        form_search__amount_value_uri;        

    console.log("query_url: " + query_url);
    
    axios.get(query_url, {
        auth: {
            username: 'ijf-data-user',
            password: 'species reunion -5Molasses gauging evidence'
        },
        }).then((res) => {
            // console.log(res);

            const resultCount = res.data.hits.total.value; 
            console.log("\n\n\n resultCount::: ");
            console.log("resultCount %o", resultCount);
            console.log("\n\n");

            const badQueryMessage = res.message
            console.log("badQueryMessage: " + badQueryMessage);

            if(resultCount !== null && resultCount > 0){
                renderResults(res);
            }
            else{
                const resultsDiv = document.getElementById('search-results');
                resultsDiv.innerHTML = '<p><center>Your search did not return any results. Try broadening your query by using fewer filters.</center></p>';
            }

        });
                
}
else{
    console.log("searchType::: " + searchType);
    console.log("Waiting for search request from the form");
}

function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function changeurl(url, title) {
    var new_url = '/' + url;
    window.history.pushState('data', title, new_url);
    
}

function renderResults(res){

    const theseResults = res.data.hits.hits;    

    resultColumns = Object.keys(theseResults);

    let tableOpen = '<table class="tablesaw  tablesaw-stack  zebra " data-tablesaw-mode="stack" data-tablesaw-sortable  data-tablesaw-sortable data-tablesaw-sortable-switch  data-tablesaw-minimap   id="search-results-table" style="background: #ffffff; color: #000000;" >';
    let tableClose = '</table>';
    let theadOpen = '<thead><tr>';    
    let theadClose = '</tr></thead>';
    let tbodyOpen = '<tbody>';
    let tbodyClose = '</tbody>';

    // Table header
    var tableHead  = '';
    tableHead += '<thead>';
    tableHead += '  <tr>';
    tableHead += '    <th data-tablesaw-sortable-col style="white-space: nowrap;">' + "Donor" + '</th>';
    tableHead += '    <th data-tablesaw-sortable-col>' + "Political Party" + '</th>';
    tableHead += '    <th data-tablesaw-sortable-col>' + "Political Entity" + '</th>';
    tableHead += '    <th data-tablesaw-sortable-col style="white-space: nowrap;">' + "Recipient" + '</th>';
    tableHead += '    <th data-tablesaw-sortable-col style="white-space: nowrap;">' + "Region" + '</th>';
    tableHead += '    <th data-tablesaw-sortable-col>' + "Donor Location" + '</th>';
    tableHead += '    <th data-tablesaw-sortable-col style="white-space: nowrap;">' + "Donor Type" + '</th>';
    tableHead += '    <th data-tablesaw-sortable-col>' + "Electoral Event" + '</th>';
    tableHead += '    <th data-tablesaw-sortable-col style="white-space: nowrap;">' + "Year" + '</th>';    
    tableHead += '    <th data-tablesaw-sortable-col  data-tablesaw-sortable-default-col style="white-space: nowrap;">' + "Amount" + '</th>';
    tableHead += '  </tr>';
    tableHead += '</thead>';


    var tableRows = '';

    for (const thisResult of theseResults){

        var tableRow = '<tr class="result-row" id="' + thisResult._id + '" data-score="">';
        tableRow += '<td>' + thisResult._source.contributor + '</td>';
        tableRow += '<td>' + thisResult._source.political_party + '</td>';
        tableRow += '<td>' + thisResult._source.political_entity + '</td>';
        tableRow += '<td>' + thisResult._source.recipient + '</td>';
        tableRow += '<td>' + thisResult._source.source + '</td>';
        tableRow += '<td>' + thisResult._source.contributor_city_province_postal + '</td>';
        tableRow += '<td>' + thisResult._source.contributor_type + '</td>';
        tableRow += '<td>' + thisResult._source.electoral_event + '</td>';
        tableRow += '<td>' + thisResult._source.year + '</td>';
        tableRow += '<td>' + thisResult._source.total_amount + '</td>';
        tableRow += '</tr>';

        tableRows = tableRows + tableRow;
    }

    let resultsTable = tableOpen + tableHead + tbodyOpen + tableRows + tbodyClose + tableClose;

    if(resultsTable != ''){
        const resultsDiv = document.getElementById('search-results');
        resultsDiv.innerHTML = resultsTable;

        Tablesaw.init();
        // $('.tablesaw').table().data("table").refresh()

    }

}

// form_search.addEventListener('submit', (event) => {
//     event.preventDefault();    

//     console.log("Form submitted");

//     form_search__terms_value_uri = encodeURIComponent(form_search.elements["ijf-db-search--terms"].value);
//     form_search__regions_value_uri = encodeURIComponent(form_search.elements["ijf-db-search--regions"].value);



//     if(form_search.elements["ijf-db-search--terms"].value != ""){

//         let query_url = es_domain + "?q=" + form_search__terms_value_uri;        

//         axios.get(query_url, {
//             auth: {
//                 username: 'ijf-data-user',
//                 password: 'species reunion -5Molasses gauging evidence'
//             },
//             }).then((res) => {
//                console.log(res);
//                renderResults(res);
//             });
                
//     }

// });
