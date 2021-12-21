
console.log("init search.js");

const form_search  = document.getElementById('ijf-db-search-header');
// const form_search__terms  = document.getElementById("ijf-db-search--terms");
// const form_search__regions  = document.getElementById("ijf-db-search--regions");
var es_domain = "https://search-ijf-data-es-ynepg6hutnwfrumwyjapgxajuq.us-east-1.es.amazonaws.com/donations/_search";

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
    tableHead  += '<thead>';
    tableHead += '<tr>';
    tableHead += '<th data-tablesaw-sortable-col data-tablesaw-sortable-default-col>' + "Year" + '</th>';
    tableHead += '<th data-tablesaw-sortable-col>' + "Contributor" + '</th>';
    // tableHead += '<tr>' + "contributor city province postal" + '</tr>';
    tableHead += '<th>' + "Type" + '</th>';
    // tableHead += '<tr>' + "electoral event" + '</tr>';
    // tableHead += '<tr>' + "political entity" + '</tr>';
    tableHead += '<th>' + "Political party" + '</th>';
    tableHead += '<th>' + "Recipient" + '</th>';
    tableHead += '<th>' + "Source" + '</th>';
    tableHead += '<th data-tablesaw-sortable-col>' + "Amount" + '</th>';
    tableHead += '</tr>';
    tableHead += '</thead>';


    var tableRows = '';

    for (const thisResult of theseResults){

        var tableRow = '<tr class="result-row" id="' + thisResult._id + '" data-score="">';
        tableRow += '<td>' + thisResult._source.year + '</td>';
        tableRow += '<td>' + thisResult._source.contributor + '</td>';
        // tableRow += '<td>' + thisResult._source.contributor_city_province_postal + '</td>';
        tableRow += '<td>' + thisResult._source.contributor_type + '</td>';
        // tableRow += '<td>' + thisResult._source.electoral_event + '</td>';
        // tableRow += '<td>' + thisResult._source.political_entity + '</td>';
        tableRow += '<td>' + thisResult._source.political_party + '</td>';
        tableRow += '<td>' + thisResult._source.recipient + '</td>';
        tableRow += '<td>' + thisResult._source.source + '</td>';
        tableRow += '<td>' + thisResult._source.total_amount + '</td>';
        tableRow += '</tr>';

        tableRows = tableRows + tableRow;
    }

    let resultsTable = tableOpen + tableHead + tbodyOpen + tableRows + tbodyClose + tableClose;

    if(resultsTable != ''){
        const resultsDiv = document.getElementById('search-results');
        resultsDiv.innerHTML = resultsTable;
    }

}

form_search.addEventListener('submit', (event) => {
    event.preventDefault();    

    console.log("Form submitted");

    form_search__terms_value_uri = encodeURIComponent(form_search.elements["ijf-db-search--terms"].value);
    form_search__regions_value_uri = encodeURIComponent(form_search.elements["ijf-db-search--regions"].value);

    // form_search__donor_value_uri = encodeURIComponent(form_search.elements["ijf-db-search--donor"].value);
    // form_search__recipient_value_uri = encodeURIComponent(form_search.elements["ijf-db-search--recipient"].value);
    // form_search__donor_type_value_uri = encodeURIComponent(form_search.elements["ijf-db-search--donor-type"].value);
    // form_search__regions_value_uri = encodeURIComponent(form_search.elements["ijf-db-search--region"].value);
    // form_search__year_value_uri = encodeURIComponent(form_search.elements["ijf-db-search-year"].value);
    // form_search__politicalparty_value_uri = encodeURIComponent(form_search.elements["ijf-db-search-politicalparty"].value);
    // form_search__amount_value_uri = encodeURIComponent(form_search.elements["ijf-db-search-amount"].value);

    // console.log("form_search__donor_value_uri " + form_search__donor_value_uri);
    // console.log("form_search__recipient_value_uri " + form_search__recipient_value_uri);
    // console.log("form_search__donor_type_value_uri " + form_search__donor_type_value_uri);
    // console.log("form_search__regions_value_uri " + form_search__regions_value_uri);
    // console.log("form_search__year_value_uri " + form_search__year_value_uri);
    // console.log("form_search__politicalparty_value_uri " + form_search__politicalparty_value_uri);
    // console.log("form_search__amount_value_uri " + form_search__amount_value_uri);


    if(form_search.elements["ijf-db-search--terms"].value != ""){

        let query_url = es_domain + "?q=" + form_search__terms_value_uri;        

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

});
