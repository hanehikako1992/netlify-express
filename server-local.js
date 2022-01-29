'use strict';

const app = require('./express/server');
const dbo = require("./express/db/conn");

app.listen(3000, () => {
	 // perform a database connection when server starts
	dbo.connectToServer(function (err) {
	if (err) console.error(err);

	});
	console.log('Local app listening on port 3000!')
});
