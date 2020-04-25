(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor"],{

/***/ "./node_modules/exif-js/exif.js":
/*!**************************************!*\
  !*** ./node_modules/exif-js/exif.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {

    var debug = false;

    var root = this;

    var EXIF = function(obj) {
        if (obj instanceof EXIF) return obj;
        if (!(this instanceof EXIF)) return new EXIF(obj);
        this.EXIFwrapped = obj;
    };

    if (true) {
        if ( true && module.exports) {
            exports = module.exports = EXIF;
        }
        exports.EXIF = EXIF;
    } else {}

    var ExifTags = EXIF.Tags = {

        // version tags
        0x9000 : "ExifVersion",             // EXIF version
        0xA000 : "FlashpixVersion",         // Flashpix format version

        // colorspace tags
        0xA001 : "ColorSpace",              // Color space information tag

        // image configuration
        0xA002 : "PixelXDimension",         // Valid width of meaningful image
        0xA003 : "PixelYDimension",         // Valid height of meaningful image
        0x9101 : "ComponentsConfiguration", // Information about channels
        0x9102 : "CompressedBitsPerPixel",  // Compressed bits per pixel

        // user information
        0x927C : "MakerNote",               // Any desired information written by the manufacturer
        0x9286 : "UserComment",             // Comments by user

        // related file
        0xA004 : "RelatedSoundFile",        // Name of related sound file

        // date and time
        0x9003 : "DateTimeOriginal",        // Date and time when the original image was generated
        0x9004 : "DateTimeDigitized",       // Date and time when the image was stored digitally
        0x9290 : "SubsecTime",              // Fractions of seconds for DateTime
        0x9291 : "SubsecTimeOriginal",      // Fractions of seconds for DateTimeOriginal
        0x9292 : "SubsecTimeDigitized",     // Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A : "ExposureTime",            // Exposure time (in seconds)
        0x829D : "FNumber",                 // F number
        0x8822 : "ExposureProgram",         // Exposure program
        0x8824 : "SpectralSensitivity",     // Spectral sensitivity
        0x8827 : "ISOSpeedRatings",         // ISO speed rating
        0x8828 : "OECF",                    // Optoelectric conversion factor
        0x9201 : "ShutterSpeedValue",       // Shutter speed
        0x9202 : "ApertureValue",           // Lens aperture
        0x9203 : "BrightnessValue",         // Value of brightness
        0x9204 : "ExposureBias",            // Exposure bias
        0x9205 : "MaxApertureValue",        // Smallest F number of lens
        0x9206 : "SubjectDistance",         // Distance to subject in meters
        0x9207 : "MeteringMode",            // Metering mode
        0x9208 : "LightSource",             // Kind of light source
        0x9209 : "Flash",                   // Flash status
        0x9214 : "SubjectArea",             // Location and area of main subject
        0x920A : "FocalLength",             // Focal length of the lens in mm
        0xA20B : "FlashEnergy",             // Strobe energy in BCPS
        0xA20C : "SpatialFrequencyResponse",    //
        0xA20E : "FocalPlaneXResolution",   // Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F : "FocalPlaneYResolution",   // Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210 : "FocalPlaneResolutionUnit",    // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214 : "SubjectLocation",         // Location of subject in image
        0xA215 : "ExposureIndex",           // Exposure index selected on camera
        0xA217 : "SensingMethod",           // Image sensor type
        0xA300 : "FileSource",              // Image source (3 == DSC)
        0xA301 : "SceneType",               // Scene type (1 == directly photographed)
        0xA302 : "CFAPattern",              // Color filter array geometric pattern
        0xA401 : "CustomRendered",          // Special processing
        0xA402 : "ExposureMode",            // Exposure mode
        0xA403 : "WhiteBalance",            // 1 = auto white balance, 2 = manual
        0xA404 : "DigitalZoomRation",       // Digital zoom ratio
        0xA405 : "FocalLengthIn35mmFilm",   // Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406 : "SceneCaptureType",        // Type of scene
        0xA407 : "GainControl",             // Degree of overall image gain adjustment
        0xA408 : "Contrast",                // Direction of contrast processing applied by camera
        0xA409 : "Saturation",              // Direction of saturation processing applied by camera
        0xA40A : "Sharpness",               // Direction of sharpness processing applied by camera
        0xA40B : "DeviceSettingDescription",    //
        0xA40C : "SubjectDistanceRange",    // Distance to subject

        // other tags
        0xA005 : "InteroperabilityIFDPointer",
        0xA420 : "ImageUniqueID"            // Identifier assigned uniquely to each image
    };

    var TiffTags = EXIF.TiffTags = {
        0x0100 : "ImageWidth",
        0x0101 : "ImageHeight",
        0x8769 : "ExifIFDPointer",
        0x8825 : "GPSInfoIFDPointer",
        0xA005 : "InteroperabilityIFDPointer",
        0x0102 : "BitsPerSample",
        0x0103 : "Compression",
        0x0106 : "PhotometricInterpretation",
        0x0112 : "Orientation",
        0x0115 : "SamplesPerPixel",
        0x011C : "PlanarConfiguration",
        0x0212 : "YCbCrSubSampling",
        0x0213 : "YCbCrPositioning",
        0x011A : "XResolution",
        0x011B : "YResolution",
        0x0128 : "ResolutionUnit",
        0x0111 : "StripOffsets",
        0x0116 : "RowsPerStrip",
        0x0117 : "StripByteCounts",
        0x0201 : "JPEGInterchangeFormat",
        0x0202 : "JPEGInterchangeFormatLength",
        0x012D : "TransferFunction",
        0x013E : "WhitePoint",
        0x013F : "PrimaryChromaticities",
        0x0211 : "YCbCrCoefficients",
        0x0214 : "ReferenceBlackWhite",
        0x0132 : "DateTime",
        0x010E : "ImageDescription",
        0x010F : "Make",
        0x0110 : "Model",
        0x0131 : "Software",
        0x013B : "Artist",
        0x8298 : "Copyright"
    };

    var GPSTags = EXIF.GPSTags = {
        0x0000 : "GPSVersionID",
        0x0001 : "GPSLatitudeRef",
        0x0002 : "GPSLatitude",
        0x0003 : "GPSLongitudeRef",
        0x0004 : "GPSLongitude",
        0x0005 : "GPSAltitudeRef",
        0x0006 : "GPSAltitude",
        0x0007 : "GPSTimeStamp",
        0x0008 : "GPSSatellites",
        0x0009 : "GPSStatus",
        0x000A : "GPSMeasureMode",
        0x000B : "GPSDOP",
        0x000C : "GPSSpeedRef",
        0x000D : "GPSSpeed",
        0x000E : "GPSTrackRef",
        0x000F : "GPSTrack",
        0x0010 : "GPSImgDirectionRef",
        0x0011 : "GPSImgDirection",
        0x0012 : "GPSMapDatum",
        0x0013 : "GPSDestLatitudeRef",
        0x0014 : "GPSDestLatitude",
        0x0015 : "GPSDestLongitudeRef",
        0x0016 : "GPSDestLongitude",
        0x0017 : "GPSDestBearingRef",
        0x0018 : "GPSDestBearing",
        0x0019 : "GPSDestDistanceRef",
        0x001A : "GPSDestDistance",
        0x001B : "GPSProcessingMethod",
        0x001C : "GPSAreaInformation",
        0x001D : "GPSDateStamp",
        0x001E : "GPSDifferential"
    };

     // EXIF 2.3 Spec
    var IFD1Tags = EXIF.IFD1Tags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0111: "StripOffsets",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x011A: "XResolution",
        0x011B: "YResolution",
        0x011C: "PlanarConfiguration",
        0x0128: "ResolutionUnit",
        0x0201: "JpegIFOffset",    // When image format is JPEG, this value show offset to JPEG data stored.(aka "ThumbnailOffset" or "JPEGInterchangeFormat")
        0x0202: "JpegIFByteCount", // When image format is JPEG, this value shows data size of JPEG image (aka "ThumbnailLength" or "JPEGInterchangeFormatLength")
        0x0211: "YCbCrCoefficients",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x0214: "ReferenceBlackWhite"
    };

    var StringValues = EXIF.StringValues = {
        ExposureProgram : {
            0 : "Not defined",
            1 : "Manual",
            2 : "Normal program",
            3 : "Aperture priority",
            4 : "Shutter priority",
            5 : "Creative program",
            6 : "Action program",
            7 : "Portrait mode",
            8 : "Landscape mode"
        },
        MeteringMode : {
            0 : "Unknown",
            1 : "Average",
            2 : "CenterWeightedAverage",
            3 : "Spot",
            4 : "MultiSpot",
            5 : "Pattern",
            6 : "Partial",
            255 : "Other"
        },
        LightSource : {
            0 : "Unknown",
            1 : "Daylight",
            2 : "Fluorescent",
            3 : "Tungsten (incandescent light)",
            4 : "Flash",
            9 : "Fine weather",
            10 : "Cloudy weather",
            11 : "Shade",
            12 : "Daylight fluorescent (D 5700 - 7100K)",
            13 : "Day white fluorescent (N 4600 - 5400K)",
            14 : "Cool white fluorescent (W 3900 - 4500K)",
            15 : "White fluorescent (WW 3200 - 3700K)",
            17 : "Standard light A",
            18 : "Standard light B",
            19 : "Standard light C",
            20 : "D55",
            21 : "D65",
            22 : "D75",
            23 : "D50",
            24 : "ISO studio tungsten",
            255 : "Other"
        },
        Flash : {
            0x0000 : "Flash did not fire",
            0x0001 : "Flash fired",
            0x0005 : "Strobe return light not detected",
            0x0007 : "Strobe return light detected",
            0x0009 : "Flash fired, compulsory flash mode",
            0x000D : "Flash fired, compulsory flash mode, return light not detected",
            0x000F : "Flash fired, compulsory flash mode, return light detected",
            0x0010 : "Flash did not fire, compulsory flash mode",
            0x0018 : "Flash did not fire, auto mode",
            0x0019 : "Flash fired, auto mode",
            0x001D : "Flash fired, auto mode, return light not detected",
            0x001F : "Flash fired, auto mode, return light detected",
            0x0020 : "No flash function",
            0x0041 : "Flash fired, red-eye reduction mode",
            0x0045 : "Flash fired, red-eye reduction mode, return light not detected",
            0x0047 : "Flash fired, red-eye reduction mode, return light detected",
            0x0049 : "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059 : "Flash fired, auto mode, red-eye reduction mode",
            0x005D : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F : "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod : {
            1 : "Not defined",
            2 : "One-chip color area sensor",
            3 : "Two-chip color area sensor",
            4 : "Three-chip color area sensor",
            5 : "Color sequential area sensor",
            7 : "Trilinear sensor",
            8 : "Color sequential linear sensor"
        },
        SceneCaptureType : {
            0 : "Standard",
            1 : "Landscape",
            2 : "Portrait",
            3 : "Night scene"
        },
        SceneType : {
            1 : "Directly photographed"
        },
        CustomRendered : {
            0 : "Normal process",
            1 : "Custom process"
        },
        WhiteBalance : {
            0 : "Auto white balance",
            1 : "Manual white balance"
        },
        GainControl : {
            0 : "None",
            1 : "Low gain up",
            2 : "High gain up",
            3 : "Low gain down",
            4 : "High gain down"
        },
        Contrast : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        Saturation : {
            0 : "Normal",
            1 : "Low saturation",
            2 : "High saturation"
        },
        Sharpness : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        SubjectDistanceRange : {
            0 : "Unknown",
            1 : "Macro",
            2 : "Close view",
            3 : "Distant view"
        },
        FileSource : {
            3 : "DSC"
        },

        Components : {
            0 : "",
            1 : "Y",
            2 : "Cb",
            3 : "Cr",
            4 : "R",
            5 : "G",
            6 : "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, handler);
        }
    }

    function imageHasData(img) {
        return !!(img.exifdata);
    }


    function base64ToArrayBuffer(base64, contentType) {
        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    }

    function objectURLToBlob(url, callback) {
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = "blob";
        http.onload = function(e) {
            if (this.status == 200 || this.status === 0) {
                callback(this.response);
            }
        };
        http.send();
    }

    function getImageData(img, callback) {
        function handleBinaryFile(binFile) {
            var data = findEXIFinJPEG(binFile);
            img.exifdata = data || {};
            var iptcdata = findIPTCinJPEG(binFile);
            img.iptcdata = iptcdata || {};
            if (EXIF.isXmpEnabled) {
               var xmpdata= findXMPinJPEG(binFile);
               img.xmpdata = xmpdata || {};               
            }
            if (callback) {
                callback.call(img);
            }
        }

        if (img.src) {
            if (/^data\:/i.test(img.src)) { // Data URI
                var arrayBuffer = base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);

            } else if (/^blob\:/i.test(img.src)) { // Object URL
                var fileReader = new FileReader();
                fileReader.onload = function(e) {
                    handleBinaryFile(e.target.result);
                };
                objectURLToBlob(img.src, function (blob) {
                    fileReader.readAsArrayBuffer(blob);
                });
            } else {
                var http = new XMLHttpRequest();
                http.onload = function() {
                    if (this.status == 200 || this.status === 0) {
                        handleBinaryFile(http.response);
                    } else {
                        throw "Could not load image";
                    }
                    http = null;
                };
                http.open("GET", img.src, true);
                http.responseType = "arraybuffer";
                http.send(null);
            }
        } else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                if (debug) console.log("Got file of length " + e.target.result.byteLength);
                handleBinaryFile(e.target.result);
            };

            fileReader.readAsArrayBuffer(img);
        }
    }

    function findEXIFinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            marker;

        while (offset < length) {
            if (dataView.getUint8(offset) != 0xFF) {
                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = dataView.getUint8(offset + 1);
            if (debug) console.log(marker);

            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 225) {
                if (debug) console.log("Found 0xFFE1 marker");

                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

                // offset += 2 + file.getShortAt(offset+2, true);

            } else {
                offset += 2 + dataView.getUint16(offset+2);
            }

        }

    }

    function findIPTCinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength;


        var isFieldSegmentStart = function(dataView, offset){
            return (
                dataView.getUint8(offset) === 0x38 &&
                dataView.getUint8(offset+1) === 0x42 &&
                dataView.getUint8(offset+2) === 0x49 &&
                dataView.getUint8(offset+3) === 0x4D &&
                dataView.getUint8(offset+4) === 0x04 &&
                dataView.getUint8(offset+5) === 0x04
            );
        };

        while (offset < length) {

            if ( isFieldSegmentStart(dataView, offset )){

                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset+7);
                if(nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
                // Check for pre photoshop 6 format
                if(nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }

                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

                return readIPTCData(file, startOffset, sectionLength);

                break;

            }


            // Not the marker, continue searching
            offset++;

        }

    }
    var IptcFieldMap = {
        0x78 : 'caption',
        0x6E : 'credit',
        0x19 : 'keywords',
        0x37 : 'dateCreated',
        0x50 : 'byline',
        0x55 : 'bylineTitle',
        0x7A : 'captionWriter',
        0x69 : 'headline',
        0x74 : 'copyright',
        0x0F : 'category'
    };
    function readIPTCData(file, startOffset, sectionLength){
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while(segmentStartPos < startOffset+sectionLength) {
            if(dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos+1) === 0x02){
                segmentType = dataView.getUint8(segmentStartPos+2);
                if(segmentType in IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos+3);
                    segmentSize = dataSize + 5;
                    fieldName = IptcFieldMap[segmentType];
                    fieldValue = getStringFromDB(dataView, segmentStartPos+5, dataSize);
                    // Check if we already stored a value with this name
                    if(data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if(data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }

            }
            segmentStartPos++;
        }
        return data;
    }



    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd),
            tags = {},
            entryOffset, tag,
            i;

        for (i=0;i<entries;i++) {
            entryOffset = dirStart + i*12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }


    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset+2, !bigEnd),
            numValues = file.getUint32(entryOffset+4, !bigEnd),
            valueOffset = file.getUint32(entryOffset+8, !bigEnd) + tiffStart,
            offset,
            vals, val, n,
            numerator, denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7: // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }

            case 2: // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return getStringFromDB(file, offset, numValues-1);

            case 3: // short, 16 bit int
                if (numValues == 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint16(offset + 2*n, !bigEnd);
                    }
                    return vals;
                }

            case 4: // long, 32 bit int
                if (numValues == 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 5:    // rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset+4, !bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        numerator = file.getUint32(valueOffset + 8*n, !bigEnd);
                        denominator = file.getUint32(valueOffset+4 + 8*n, !bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9: // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 10: // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset+4, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 8*n, !bigEnd) / file.getInt32(valueOffset+4 + 8*n, !bigEnd);
                    }
                    return vals;
                }
        }
    }

    /**
    * Given an IFD (Image File Directory) start offset
    * returns an offset to next IFD or 0 if it's the last IFD.
    */
    function getNextIFDOffset(dataView, dirStart, bigEnd){
        //the first 2bytes means the number of directory entries contains in this IFD
        var entries = dataView.getUint16(dirStart, !bigEnd);

        // After last directory entry, there is a 4bytes of data,
        // it means an offset to next IFD.
        // If its value is '0x00000000', it means this is the last IFD and there is no linked IFD.

        return dataView.getUint32(dirStart + 2 + entries * 12, !bigEnd); // each entry is 12 bytes long
    }

    function readThumbnailImage(dataView, tiffStart, firstIFDOffset, bigEnd){
        // get the IFD1 offset
        var IFD1OffsetPointer = getNextIFDOffset(dataView, tiffStart+firstIFDOffset, bigEnd);

        if (!IFD1OffsetPointer) {
            // console.log('******** IFD1Offset is empty, image thumb not found ********');
            return {};
        }
        else if (IFD1OffsetPointer > dataView.byteLength) { // this should not happen
            // console.log('******** IFD1Offset is outside the bounds of the DataView ********');
            return {};
        }
        // console.log('*******  thumbnail IFD offset (IFD1) is: %s', IFD1OffsetPointer);

        var thumbTags = readTags(dataView, tiffStart, tiffStart + IFD1OffsetPointer, IFD1Tags, bigEnd)

        // EXIF 2.3 specification for JPEG format thumbnail

        // If the value of Compression(0x0103) Tag in IFD1 is '6', thumbnail image format is JPEG.
        // Most of Exif image uses JPEG format for thumbnail. In that case, you can get offset of thumbnail
        // by JpegIFOffset(0x0201) Tag in IFD1, size of thumbnail by JpegIFByteCount(0x0202) Tag.
        // Data format is ordinary JPEG format, starts from 0xFFD8 and ends by 0xFFD9. It seems that
        // JPEG format and 160x120pixels of size are recommended thumbnail format for Exif2.1 or later.

        if (thumbTags['Compression']) {
            // console.log('Thumbnail image found!');

            switch (thumbTags['Compression']) {
                case 6:
                    // console.log('Thumbnail image format is JPEG');
                    if (thumbTags.JpegIFOffset && thumbTags.JpegIFByteCount) {
                    // extract the thumbnail
                        var tOffset = tiffStart + thumbTags.JpegIFOffset;
                        var tLength = thumbTags.JpegIFByteCount;
                        thumbTags['blob'] = new Blob([new Uint8Array(dataView.buffer, tOffset, tLength)], {
                            type: 'image/jpeg'
                        });
                    }
                break;

            case 1:
                console.log("Thumbnail image format is TIFF, which is not implemented.");
                break;
            default:
                console.log("Unknown thumbnail image format '%s'", thumbTags['Compression']);
            }
        }
        else if (thumbTags['PhotometricInterpretation'] == 2) {
            console.log("Thumbnail image format is RGB, which is not implemented.");
        }
        return thumbTags;
    }

    function getStringFromDB(buffer, start, length) {
        var outstr = "";
        for (n = start; n < start+length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    }

    function readEXIFData(file, start) {
        if (getStringFromDB(file, start, 4) != "Exif") {
            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
            return false;
        }

        var bigEnd,
            tags, tag,
            exifData, gpsData,
            tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getUint16(tiffOffset+2, !bigEnd) != 0x002A) {
            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        var firstIFDOffset = file.getUint32(tiffOffset+4, !bigEnd);

        if (firstIFDOffset < 0x00000008) {
            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset+4, !bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource" :
                    case "Flash" :
                    case "MeteringMode" :
                    case "ExposureProgram" :
                    case "SensingMethod" :
                    case "SceneCaptureType" :
                    case "SceneType" :
                    case "CustomRendered" :
                    case "WhiteBalance" :
                    case "GainControl" :
                    case "Contrast" :
                    case "Saturation" :
                    case "Sharpness" :
                    case "SubjectDistanceRange" :
                    case "FileSource" :
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;

                    case "ExifVersion" :
                    case "FlashpixVersion" :
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;

                    case "ComponentsConfiguration" :
                        exifData[tag] =
                            StringValues.Components[exifData[tag][0]] +
                            StringValues.Components[exifData[tag][1]] +
                            StringValues.Components[exifData[tag][2]] +
                            StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID" :
                        gpsData[tag] = gpsData[tag][0] +
                            "." + gpsData[tag][1] +
                            "." + gpsData[tag][2] +
                            "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        // extract thumbnail
        tags['thumbnail'] = readThumbnailImage(file, tiffOffset, firstIFDOffset, bigEnd);

        return tags;
    }

   function findXMPinJPEG(file) {

        if (!('DOMParser' in self)) {
            // console.warn('XML parsing not supported without DOMParser');
            return;
        }
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
           if (debug) console.log("Not a valid JPEG");
           return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            dom = new DOMParser();

        while (offset < (length-4)) {
            if (getStringFromDB(dataView, offset, 4) == "http") {
                var startOffset = offset - 1;
                var sectionLength = dataView.getUint16(offset - 2) - 1;
                var xmpString = getStringFromDB(dataView, startOffset, sectionLength)
                var xmpEndIndex = xmpString.indexOf('xmpmeta>') + 8;
                xmpString = xmpString.substring( xmpString.indexOf( '<x:xmpmeta' ), xmpEndIndex );

                var indexOfXmp = xmpString.indexOf('x:xmpmeta') + 10
                //Many custom written programs embed xmp/xml without any namespace. Following are some of them.
                //Without these namespaces, XML is thought to be invalid by parsers
                xmpString = xmpString.slice(0, indexOfXmp)
                            + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" '
                            + 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '
                            + 'xmlns:tiff="http://ns.adobe.com/tiff/1.0/" '
                            + 'xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" '
                            + 'xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" '
                            + 'xmlns:exif="http://ns.adobe.com/exif/1.0/" '
                            + 'xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" '
                            + 'xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" '
                            + 'xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" '
                            + 'xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" '
                            + 'xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '
                            + xmpString.slice(indexOfXmp)

                var domDocument = dom.parseFromString( xmpString, 'text/xml' );
                return xml2Object(domDocument);
            } else{
             offset++;
            }
        }
    }

    function xml2json(xml) {
        var json = {};
      
        if (xml.nodeType == 1) { // element node
          if (xml.attributes.length > 0) {
            json['@attributes'] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              json['@attributes'][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType == 3) { // text node
          return xml.nodeValue;
        }
      
        // deal with children
        if (xml.hasChildNodes()) {
          for(var i = 0; i < xml.childNodes.length; i++) {
            var child = xml.childNodes.item(i);
            var nodeName = child.nodeName;
            if (json[nodeName] == null) {
              json[nodeName] = xml2json(child);
            } else {
              if (json[nodeName].push == null) {
                var old = json[nodeName];
                json[nodeName] = [];
                json[nodeName].push(old);
              }
              json[nodeName].push(xml2json(child));
            }
          }
        }
        
        return json;
    }

    function xml2Object(xml) {
        try {
            var obj = {};
            if (xml.children.length > 0) {
              for (var i = 0; i < xml.children.length; i++) {
                var item = xml.children.item(i);
                var attributes = item.attributes;
                for(var idx in attributes) {
                    var itemAtt = attributes[idx];
                    var dataKey = itemAtt.nodeName;
                    var dataValue = itemAtt.nodeValue;

                    if(dataKey !== undefined) {
                        obj[dataKey] = dataValue;
                    }
                }
                var nodeName = item.nodeName;

                if (typeof (obj[nodeName]) == "undefined") {
                  obj[nodeName] = xml2json(item);
                } else {
                  if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];

                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                  }
                  obj[nodeName].push(xml2json(item));
                }
              }
            } else {
              obj = xml.textContent;
            }
            return obj;
          } catch (e) {
              console.log(e.message);
          }
    }

    EXIF.enableXmp = function() {
        EXIF.isXmpEnabled = true;
    }

    EXIF.disableXmp = function() {
        EXIF.isXmpEnabled = false;
    }

    EXIF.getData = function(img, callback) {
        if (((self.Image && img instanceof self.Image)
            || (self.HTMLImageElement && img instanceof self.HTMLImageElement))
            && !img.complete)
            return false;

        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    }

    EXIF.getTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.exifdata[tag];
    }
    
    EXIF.getIptcTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.iptcdata[tag];
    }

    EXIF.getAllTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.exifdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }
    
    EXIF.getAllIptcTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.iptcdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }

    EXIF.pretty = function(img) {
        if (!imageHasData(img)) return "";
        var a,
            data = img.exifdata,
            strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    }

    EXIF.readFromBinaryFile = function(file) {
        return findEXIFinJPEG(file);
    }

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return EXIF;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}.call(this));



/***/ }),

/***/ "./node_modules/exif-rotate-js/lib/getBase64Strings.js":
/*!*************************************************************!*\
  !*** ./node_modules/exif-rotate-js/lib/getBase64Strings.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const getImages_1 = __webpack_require__(/*! ./utils/getImages */ "./node_modules/exif-rotate-js/lib/utils/getImages.js");
const options_1 = __webpack_require__(/*! ./options */ "./node_modules/exif-rotate-js/lib/options.js");
const getBrowserOrientation_1 = __webpack_require__(/*! ./utils/getBrowserOrientation */ "./node_modules/exif-rotate-js/lib/utils/getBrowserOrientation.js");
exports.getBase64Strings = async (files, { maxSize = options_1.defaultOptions.maxSize } = {}) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error('canvas can not created');
    }
    const images = await getImages_1.getImages(files);
    const hasBrowserOrientation = await getBrowserOrientation_1.getBrowserOrientation();
    if (hasBrowserOrientation) {
        const base64s = images.map((image) => {
            const { width, height } = getImages_1.getSize(image.width, image.height, maxSize);
            canvas.setAttribute('width', `${width}px`);
            canvas.setAttribute('height', `${height}px`);
            context.drawImage(image, 0, 0, width, height);
            return canvas.toDataURL('image/jpeg');
        });
        return base64s;
    }
    const base64s = images.map((image) => {
        const orientation = getImages_1.getOrientation(image);
        const { width, height } = getImages_1.getSize(orientation > 4 ? image.height : image.width, orientation > 4 ? image.width : image.height, maxSize);
        canvas.setAttribute('width', `${width}px`);
        canvas.setAttribute('height', `${height}px`);
        const { translate, scale, rotate } = getImages_1.getCanvasOptions(width, height, orientation);
        context.translate(translate.x, translate.y);
        context.scale(scale.x, scale.y);
        context.rotate(rotate.angle);
        // exif orientation values > 4 correspond to portrait orientation.
        // width and height parameters must be swapped for landscape to ensure correct image display
        if (orientation > 4) {
            context.drawImage(image, 0, 0, height, width);
        }
        else {
            context.drawImage(image, 0, 0, width, height);
        }
        return canvas.toDataURL('image/jpeg');
    });
    return base64s;
};


/***/ }),

/***/ "./node_modules/exif-rotate-js/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/exif-rotate-js/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./getBase64Strings */ "./node_modules/exif-rotate-js/lib/getBase64Strings.js"));


/***/ }),

/***/ "./node_modules/exif-rotate-js/lib/options.js":
/*!****************************************************!*\
  !*** ./node_modules/exif-rotate-js/lib/options.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = {
    maxSize: 720,
};


/***/ }),

/***/ "./node_modules/exif-rotate-js/lib/utils/getBrowserOrientation.js":
/*!************************************************************************!*\
  !*** ./node_modules/exif-rotate-js/lib/utils/getBrowserOrientation.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Thanks JavaScript-Load-Image repo
// https://github.com/blueimp/JavaScript-Load-Image/blob/1e4df707821a0afcc11ea0720ee403b8759f3881/js/load-image-orientation.js#L37-L53
Object.defineProperty(exports, "__esModule", { value: true });
const readImage_1 = __webpack_require__(/*! ./readImage */ "./node_modules/exif-rotate-js/lib/utils/readImage.js");
async function getBrowserOrientation() {
    // black 2x1 JPEG, with the following meta information set:
    // EXIF Orientation: 6 (Rotated 90° CCW)
    const testImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' +
        'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' +
        'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' +
        'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' +
        'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' +
        'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
    const img = await readImage_1.readImage(testImageURL);
    // Check if browser supports automatic image orientation:
    return img.width === 1 && img.height === 2;
}
exports.getBrowserOrientation = getBrowserOrientation;


/***/ }),

/***/ "./node_modules/exif-rotate-js/lib/utils/getImages.js":
/*!************************************************************!*\
  !*** ./node_modules/exif-rotate-js/lib/utils/getImages.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EXIF = __webpack_require__(/*! exif-js */ "./node_modules/exif-js/exif.js");
const readFile_1 = __webpack_require__(/*! ./readFile */ "./node_modules/exif-rotate-js/lib/utils/readFile.js");
const readImage_1 = __webpack_require__(/*! ./readImage */ "./node_modules/exif-rotate-js/lib/utils/readImage.js");
const options_1 = __webpack_require__(/*! ../options */ "./node_modules/exif-rotate-js/lib/options.js");
async function getImages(files) {
    const datas = await readFile_1.getDataFromReadFile(files);
    return await Promise.all(datas.map((item) => readImage_1.readImage(item)));
}
exports.getImages = getImages;
function getSize(width, height, maxSize = options_1.defaultOptions.maxSize) {
    const parseWidth = maxSize < width ? maxSize : width;
    const parseHeight = maxSize < height ? maxSize : height;
    if (width > height) {
        return {
            width: parseWidth,
            height: height * (parseWidth / width),
        };
    }
    if (height > width) {
        return {
            width: width * (parseHeight / height),
            height: parseHeight,
        };
    }
    return {
        width: parseWidth,
        height: parseHeight,
    };
}
exports.getSize = getSize;
function getOrientation(img) {
    let orientation = 1;
    // @ts-ignore not string: https://github.com/exif-js/exif-js/pull/198
    EXIF.getData(img, () => {
        orientation = EXIF.getTag(img, 'Orientation');
    });
    return orientation;
}
exports.getOrientation = getOrientation;
function getCanvasOptions(width, height, orientation) {
    const options = {
        translate: {
            x: 0,
            y: 0,
        },
        scale: {
            x: 1,
            y: 1,
        },
        rotate: {
            angle: 0,
        },
    };
    switch (orientation) {
        case 2:
            // horizontal flip
            return {
                ...options,
                translate: {
                    ...options.translate,
                    x: width,
                },
                scale: {
                    ...options.scale,
                    x: -1,
                },
            };
        case 3:
            // 180° rotate left
            return {
                ...options,
                translate: {
                    x: width,
                    y: height,
                },
                rotate: {
                    angle: Math.PI,
                },
            };
        case 4:
            // vertical flip
            return {
                ...options,
                translate: {
                    ...options.translate,
                    y: height,
                },
                scale: {
                    ...options.scale,
                    y: -1,
                },
            };
        case 5:
            // vertical flip + 90 rotate right
            return {
                ...options,
                scale: {
                    ...options.scale,
                    x: -1,
                },
                rotate: {
                    angle: (90 * Math.PI) / 180,
                },
            };
        case 6:
            // 90° rotate right
            return {
                ...options,
                translate: {
                    ...options.translate,
                    x: width,
                },
                rotate: {
                    angle: (90 * Math.PI) / 180,
                },
            };
        case 7:
            // horizontal flip + 90 rotate right
            return {
                ...options,
                translate: {
                    x: width,
                    y: height,
                },
                rotate: {
                    angle: (90 * Math.PI) / 180,
                },
                scale: {
                    ...options.scale,
                    y: -1,
                },
            };
        case 8:
            // 90° rotate left
            return {
                ...options,
                translate: {
                    ...options.translate,
                    y: height,
                },
                rotate: {
                    angle: -(90 * Math.PI) / 180,
                },
            };
        default:
            return options;
    }
}
exports.getCanvasOptions = getCanvasOptions;


/***/ }),

/***/ "./node_modules/exif-rotate-js/lib/utils/readFile.js":
/*!***********************************************************!*\
  !*** ./node_modules/exif-rotate-js/lib/utils/readFile.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
}
exports.readFile = readFile;
async function getDataFromReadFile(files) {
    return await Promise.all(Array.from(files).map((file) => readFile(file)));
}
exports.getDataFromReadFile = getDataFromReadFile;


/***/ }),

/***/ "./node_modules/exif-rotate-js/lib/utils/readImage.js":
/*!************************************************************!*\
  !*** ./node_modules/exif-rotate-js/lib/utils/readImage.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function readImage(src) {
    const img = new Image();
    return new Promise((resolve, reject) => {
        img.onload = () => resolve(img);
        img.onerror = (error) => reject(error);
        img.src = src;
    });
}
exports.readImage = readImage;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhpZi1qcy9leGlmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leGlmLXJvdGF0ZS1qcy9saWIvZ2V0QmFzZTY0U3RyaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhpZi1yb3RhdGUtanMvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leGlmLXJvdGF0ZS1qcy9saWIvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhpZi1yb3RhdGUtanMvbGliL3V0aWxzL2dldEJyb3dzZXJPcmllbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhpZi1yb3RhdGUtanMvbGliL3V0aWxzL2dldEltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhpZi1yb3RhdGUtanMvbGliL3V0aWxzL3JlYWRGaWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leGlmLXJvdGF0ZS1qcy9saWIvdXRpbHMvcmVhZEltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxJQUE4QjtBQUN0QyxZQUFZLEtBQTZCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEtBQUssTUFBTSxFQUVOOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0SmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiJ2ZW5kb3IuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGRlYnVnID0gZmFsc2U7XG5cbiAgICB2YXIgcm9vdCA9IHRoaXM7XG5cbiAgICB2YXIgRVhJRiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgRVhJRikgcmV0dXJuIG9iajtcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEVYSUYpKSByZXR1cm4gbmV3IEVYSUYob2JqKTtcbiAgICAgICAgdGhpcy5FWElGd3JhcHBlZCA9IG9iajtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IEVYSUY7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0cy5FWElGID0gRVhJRjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LkVYSUYgPSBFWElGO1xuICAgIH1cblxuICAgIHZhciBFeGlmVGFncyA9IEVYSUYuVGFncyA9IHtcblxuICAgICAgICAvLyB2ZXJzaW9uIHRhZ3NcbiAgICAgICAgMHg5MDAwIDogXCJFeGlmVmVyc2lvblwiLCAgICAgICAgICAgICAvLyBFWElGIHZlcnNpb25cbiAgICAgICAgMHhBMDAwIDogXCJGbGFzaHBpeFZlcnNpb25cIiwgICAgICAgICAvLyBGbGFzaHBpeCBmb3JtYXQgdmVyc2lvblxuXG4gICAgICAgIC8vIGNvbG9yc3BhY2UgdGFnc1xuICAgICAgICAweEEwMDEgOiBcIkNvbG9yU3BhY2VcIiwgICAgICAgICAgICAgIC8vIENvbG9yIHNwYWNlIGluZm9ybWF0aW9uIHRhZ1xuXG4gICAgICAgIC8vIGltYWdlIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgMHhBMDAyIDogXCJQaXhlbFhEaW1lbnNpb25cIiwgICAgICAgICAvLyBWYWxpZCB3aWR0aCBvZiBtZWFuaW5nZnVsIGltYWdlXG4gICAgICAgIDB4QTAwMyA6IFwiUGl4ZWxZRGltZW5zaW9uXCIsICAgICAgICAgLy8gVmFsaWQgaGVpZ2h0IG9mIG1lYW5pbmdmdWwgaW1hZ2VcbiAgICAgICAgMHg5MTAxIDogXCJDb21wb25lbnRzQ29uZmlndXJhdGlvblwiLCAvLyBJbmZvcm1hdGlvbiBhYm91dCBjaGFubmVsc1xuICAgICAgICAweDkxMDIgOiBcIkNvbXByZXNzZWRCaXRzUGVyUGl4ZWxcIiwgIC8vIENvbXByZXNzZWQgYml0cyBwZXIgcGl4ZWxcblxuICAgICAgICAvLyB1c2VyIGluZm9ybWF0aW9uXG4gICAgICAgIDB4OTI3QyA6IFwiTWFrZXJOb3RlXCIsICAgICAgICAgICAgICAgLy8gQW55IGRlc2lyZWQgaW5mb3JtYXRpb24gd3JpdHRlbiBieSB0aGUgbWFudWZhY3R1cmVyXG4gICAgICAgIDB4OTI4NiA6IFwiVXNlckNvbW1lbnRcIiwgICAgICAgICAgICAgLy8gQ29tbWVudHMgYnkgdXNlclxuXG4gICAgICAgIC8vIHJlbGF0ZWQgZmlsZVxuICAgICAgICAweEEwMDQgOiBcIlJlbGF0ZWRTb3VuZEZpbGVcIiwgICAgICAgIC8vIE5hbWUgb2YgcmVsYXRlZCBzb3VuZCBmaWxlXG5cbiAgICAgICAgLy8gZGF0ZSBhbmQgdGltZVxuICAgICAgICAweDkwMDMgOiBcIkRhdGVUaW1lT3JpZ2luYWxcIiwgICAgICAgIC8vIERhdGUgYW5kIHRpbWUgd2hlbiB0aGUgb3JpZ2luYWwgaW1hZ2Ugd2FzIGdlbmVyYXRlZFxuICAgICAgICAweDkwMDQgOiBcIkRhdGVUaW1lRGlnaXRpemVkXCIsICAgICAgIC8vIERhdGUgYW5kIHRpbWUgd2hlbiB0aGUgaW1hZ2Ugd2FzIHN0b3JlZCBkaWdpdGFsbHlcbiAgICAgICAgMHg5MjkwIDogXCJTdWJzZWNUaW1lXCIsICAgICAgICAgICAgICAvLyBGcmFjdGlvbnMgb2Ygc2Vjb25kcyBmb3IgRGF0ZVRpbWVcbiAgICAgICAgMHg5MjkxIDogXCJTdWJzZWNUaW1lT3JpZ2luYWxcIiwgICAgICAvLyBGcmFjdGlvbnMgb2Ygc2Vjb25kcyBmb3IgRGF0ZVRpbWVPcmlnaW5hbFxuICAgICAgICAweDkyOTIgOiBcIlN1YnNlY1RpbWVEaWdpdGl6ZWRcIiwgICAgIC8vIEZyYWN0aW9ucyBvZiBzZWNvbmRzIGZvciBEYXRlVGltZURpZ2l0aXplZFxuXG4gICAgICAgIC8vIHBpY3R1cmUtdGFraW5nIGNvbmRpdGlvbnNcbiAgICAgICAgMHg4MjlBIDogXCJFeHBvc3VyZVRpbWVcIiwgICAgICAgICAgICAvLyBFeHBvc3VyZSB0aW1lIChpbiBzZWNvbmRzKVxuICAgICAgICAweDgyOUQgOiBcIkZOdW1iZXJcIiwgICAgICAgICAgICAgICAgIC8vIEYgbnVtYmVyXG4gICAgICAgIDB4ODgyMiA6IFwiRXhwb3N1cmVQcm9ncmFtXCIsICAgICAgICAgLy8gRXhwb3N1cmUgcHJvZ3JhbVxuICAgICAgICAweDg4MjQgOiBcIlNwZWN0cmFsU2Vuc2l0aXZpdHlcIiwgICAgIC8vIFNwZWN0cmFsIHNlbnNpdGl2aXR5XG4gICAgICAgIDB4ODgyNyA6IFwiSVNPU3BlZWRSYXRpbmdzXCIsICAgICAgICAgLy8gSVNPIHNwZWVkIHJhdGluZ1xuICAgICAgICAweDg4MjggOiBcIk9FQ0ZcIiwgICAgICAgICAgICAgICAgICAgIC8vIE9wdG9lbGVjdHJpYyBjb252ZXJzaW9uIGZhY3RvclxuICAgICAgICAweDkyMDEgOiBcIlNodXR0ZXJTcGVlZFZhbHVlXCIsICAgICAgIC8vIFNodXR0ZXIgc3BlZWRcbiAgICAgICAgMHg5MjAyIDogXCJBcGVydHVyZVZhbHVlXCIsICAgICAgICAgICAvLyBMZW5zIGFwZXJ0dXJlXG4gICAgICAgIDB4OTIwMyA6IFwiQnJpZ2h0bmVzc1ZhbHVlXCIsICAgICAgICAgLy8gVmFsdWUgb2YgYnJpZ2h0bmVzc1xuICAgICAgICAweDkyMDQgOiBcIkV4cG9zdXJlQmlhc1wiLCAgICAgICAgICAgIC8vIEV4cG9zdXJlIGJpYXNcbiAgICAgICAgMHg5MjA1IDogXCJNYXhBcGVydHVyZVZhbHVlXCIsICAgICAgICAvLyBTbWFsbGVzdCBGIG51bWJlciBvZiBsZW5zXG4gICAgICAgIDB4OTIwNiA6IFwiU3ViamVjdERpc3RhbmNlXCIsICAgICAgICAgLy8gRGlzdGFuY2UgdG8gc3ViamVjdCBpbiBtZXRlcnNcbiAgICAgICAgMHg5MjA3IDogXCJNZXRlcmluZ01vZGVcIiwgICAgICAgICAgICAvLyBNZXRlcmluZyBtb2RlXG4gICAgICAgIDB4OTIwOCA6IFwiTGlnaHRTb3VyY2VcIiwgICAgICAgICAgICAgLy8gS2luZCBvZiBsaWdodCBzb3VyY2VcbiAgICAgICAgMHg5MjA5IDogXCJGbGFzaFwiLCAgICAgICAgICAgICAgICAgICAvLyBGbGFzaCBzdGF0dXNcbiAgICAgICAgMHg5MjE0IDogXCJTdWJqZWN0QXJlYVwiLCAgICAgICAgICAgICAvLyBMb2NhdGlvbiBhbmQgYXJlYSBvZiBtYWluIHN1YmplY3RcbiAgICAgICAgMHg5MjBBIDogXCJGb2NhbExlbmd0aFwiLCAgICAgICAgICAgICAvLyBGb2NhbCBsZW5ndGggb2YgdGhlIGxlbnMgaW4gbW1cbiAgICAgICAgMHhBMjBCIDogXCJGbGFzaEVuZXJneVwiLCAgICAgICAgICAgICAvLyBTdHJvYmUgZW5lcmd5IGluIEJDUFNcbiAgICAgICAgMHhBMjBDIDogXCJTcGF0aWFsRnJlcXVlbmN5UmVzcG9uc2VcIiwgICAgLy9cbiAgICAgICAgMHhBMjBFIDogXCJGb2NhbFBsYW5lWFJlc29sdXRpb25cIiwgICAvLyBOdW1iZXIgb2YgcGl4ZWxzIGluIHdpZHRoIGRpcmVjdGlvbiBwZXIgRm9jYWxQbGFuZVJlc29sdXRpb25Vbml0XG4gICAgICAgIDB4QTIwRiA6IFwiRm9jYWxQbGFuZVlSZXNvbHV0aW9uXCIsICAgLy8gTnVtYmVyIG9mIHBpeGVscyBpbiBoZWlnaHQgZGlyZWN0aW9uIHBlciBGb2NhbFBsYW5lUmVzb2x1dGlvblVuaXRcbiAgICAgICAgMHhBMjEwIDogXCJGb2NhbFBsYW5lUmVzb2x1dGlvblVuaXRcIiwgICAgLy8gVW5pdCBmb3IgbWVhc3VyaW5nIEZvY2FsUGxhbmVYUmVzb2x1dGlvbiBhbmQgRm9jYWxQbGFuZVlSZXNvbHV0aW9uXG4gICAgICAgIDB4QTIxNCA6IFwiU3ViamVjdExvY2F0aW9uXCIsICAgICAgICAgLy8gTG9jYXRpb24gb2Ygc3ViamVjdCBpbiBpbWFnZVxuICAgICAgICAweEEyMTUgOiBcIkV4cG9zdXJlSW5kZXhcIiwgICAgICAgICAgIC8vIEV4cG9zdXJlIGluZGV4IHNlbGVjdGVkIG9uIGNhbWVyYVxuICAgICAgICAweEEyMTcgOiBcIlNlbnNpbmdNZXRob2RcIiwgICAgICAgICAgIC8vIEltYWdlIHNlbnNvciB0eXBlXG4gICAgICAgIDB4QTMwMCA6IFwiRmlsZVNvdXJjZVwiLCAgICAgICAgICAgICAgLy8gSW1hZ2Ugc291cmNlICgzID09IERTQylcbiAgICAgICAgMHhBMzAxIDogXCJTY2VuZVR5cGVcIiwgICAgICAgICAgICAgICAvLyBTY2VuZSB0eXBlICgxID09IGRpcmVjdGx5IHBob3RvZ3JhcGhlZClcbiAgICAgICAgMHhBMzAyIDogXCJDRkFQYXR0ZXJuXCIsICAgICAgICAgICAgICAvLyBDb2xvciBmaWx0ZXIgYXJyYXkgZ2VvbWV0cmljIHBhdHRlcm5cbiAgICAgICAgMHhBNDAxIDogXCJDdXN0b21SZW5kZXJlZFwiLCAgICAgICAgICAvLyBTcGVjaWFsIHByb2Nlc3NpbmdcbiAgICAgICAgMHhBNDAyIDogXCJFeHBvc3VyZU1vZGVcIiwgICAgICAgICAgICAvLyBFeHBvc3VyZSBtb2RlXG4gICAgICAgIDB4QTQwMyA6IFwiV2hpdGVCYWxhbmNlXCIsICAgICAgICAgICAgLy8gMSA9IGF1dG8gd2hpdGUgYmFsYW5jZSwgMiA9IG1hbnVhbFxuICAgICAgICAweEE0MDQgOiBcIkRpZ2l0YWxab29tUmF0aW9uXCIsICAgICAgIC8vIERpZ2l0YWwgem9vbSByYXRpb1xuICAgICAgICAweEE0MDUgOiBcIkZvY2FsTGVuZ3RoSW4zNW1tRmlsbVwiLCAgIC8vIEVxdWl2YWxlbnQgZm9hY2wgbGVuZ3RoIGFzc3VtaW5nIDM1bW0gZmlsbSBjYW1lcmEgKGluIG1tKVxuICAgICAgICAweEE0MDYgOiBcIlNjZW5lQ2FwdHVyZVR5cGVcIiwgICAgICAgIC8vIFR5cGUgb2Ygc2NlbmVcbiAgICAgICAgMHhBNDA3IDogXCJHYWluQ29udHJvbFwiLCAgICAgICAgICAgICAvLyBEZWdyZWUgb2Ygb3ZlcmFsbCBpbWFnZSBnYWluIGFkanVzdG1lbnRcbiAgICAgICAgMHhBNDA4IDogXCJDb250cmFzdFwiLCAgICAgICAgICAgICAgICAvLyBEaXJlY3Rpb24gb2YgY29udHJhc3QgcHJvY2Vzc2luZyBhcHBsaWVkIGJ5IGNhbWVyYVxuICAgICAgICAweEE0MDkgOiBcIlNhdHVyYXRpb25cIiwgICAgICAgICAgICAgIC8vIERpcmVjdGlvbiBvZiBzYXR1cmF0aW9uIHByb2Nlc3NpbmcgYXBwbGllZCBieSBjYW1lcmFcbiAgICAgICAgMHhBNDBBIDogXCJTaGFycG5lc3NcIiwgICAgICAgICAgICAgICAvLyBEaXJlY3Rpb24gb2Ygc2hhcnBuZXNzIHByb2Nlc3NpbmcgYXBwbGllZCBieSBjYW1lcmFcbiAgICAgICAgMHhBNDBCIDogXCJEZXZpY2VTZXR0aW5nRGVzY3JpcHRpb25cIiwgICAgLy9cbiAgICAgICAgMHhBNDBDIDogXCJTdWJqZWN0RGlzdGFuY2VSYW5nZVwiLCAgICAvLyBEaXN0YW5jZSB0byBzdWJqZWN0XG5cbiAgICAgICAgLy8gb3RoZXIgdGFnc1xuICAgICAgICAweEEwMDUgOiBcIkludGVyb3BlcmFiaWxpdHlJRkRQb2ludGVyXCIsXG4gICAgICAgIDB4QTQyMCA6IFwiSW1hZ2VVbmlxdWVJRFwiICAgICAgICAgICAgLy8gSWRlbnRpZmllciBhc3NpZ25lZCB1bmlxdWVseSB0byBlYWNoIGltYWdlXG4gICAgfTtcblxuICAgIHZhciBUaWZmVGFncyA9IEVYSUYuVGlmZlRhZ3MgPSB7XG4gICAgICAgIDB4MDEwMCA6IFwiSW1hZ2VXaWR0aFwiLFxuICAgICAgICAweDAxMDEgOiBcIkltYWdlSGVpZ2h0XCIsXG4gICAgICAgIDB4ODc2OSA6IFwiRXhpZklGRFBvaW50ZXJcIixcbiAgICAgICAgMHg4ODI1IDogXCJHUFNJbmZvSUZEUG9pbnRlclwiLFxuICAgICAgICAweEEwMDUgOiBcIkludGVyb3BlcmFiaWxpdHlJRkRQb2ludGVyXCIsXG4gICAgICAgIDB4MDEwMiA6IFwiQml0c1BlclNhbXBsZVwiLFxuICAgICAgICAweDAxMDMgOiBcIkNvbXByZXNzaW9uXCIsXG4gICAgICAgIDB4MDEwNiA6IFwiUGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvblwiLFxuICAgICAgICAweDAxMTIgOiBcIk9yaWVudGF0aW9uXCIsXG4gICAgICAgIDB4MDExNSA6IFwiU2FtcGxlc1BlclBpeGVsXCIsXG4gICAgICAgIDB4MDExQyA6IFwiUGxhbmFyQ29uZmlndXJhdGlvblwiLFxuICAgICAgICAweDAyMTIgOiBcIllDYkNyU3ViU2FtcGxpbmdcIixcbiAgICAgICAgMHgwMjEzIDogXCJZQ2JDclBvc2l0aW9uaW5nXCIsXG4gICAgICAgIDB4MDExQSA6IFwiWFJlc29sdXRpb25cIixcbiAgICAgICAgMHgwMTFCIDogXCJZUmVzb2x1dGlvblwiLFxuICAgICAgICAweDAxMjggOiBcIlJlc29sdXRpb25Vbml0XCIsXG4gICAgICAgIDB4MDExMSA6IFwiU3RyaXBPZmZzZXRzXCIsXG4gICAgICAgIDB4MDExNiA6IFwiUm93c1BlclN0cmlwXCIsXG4gICAgICAgIDB4MDExNyA6IFwiU3RyaXBCeXRlQ291bnRzXCIsXG4gICAgICAgIDB4MDIwMSA6IFwiSlBFR0ludGVyY2hhbmdlRm9ybWF0XCIsXG4gICAgICAgIDB4MDIwMiA6IFwiSlBFR0ludGVyY2hhbmdlRm9ybWF0TGVuZ3RoXCIsXG4gICAgICAgIDB4MDEyRCA6IFwiVHJhbnNmZXJGdW5jdGlvblwiLFxuICAgICAgICAweDAxM0UgOiBcIldoaXRlUG9pbnRcIixcbiAgICAgICAgMHgwMTNGIDogXCJQcmltYXJ5Q2hyb21hdGljaXRpZXNcIixcbiAgICAgICAgMHgwMjExIDogXCJZQ2JDckNvZWZmaWNpZW50c1wiLFxuICAgICAgICAweDAyMTQgOiBcIlJlZmVyZW5jZUJsYWNrV2hpdGVcIixcbiAgICAgICAgMHgwMTMyIDogXCJEYXRlVGltZVwiLFxuICAgICAgICAweDAxMEUgOiBcIkltYWdlRGVzY3JpcHRpb25cIixcbiAgICAgICAgMHgwMTBGIDogXCJNYWtlXCIsXG4gICAgICAgIDB4MDExMCA6IFwiTW9kZWxcIixcbiAgICAgICAgMHgwMTMxIDogXCJTb2Z0d2FyZVwiLFxuICAgICAgICAweDAxM0IgOiBcIkFydGlzdFwiLFxuICAgICAgICAweDgyOTggOiBcIkNvcHlyaWdodFwiXG4gICAgfTtcblxuICAgIHZhciBHUFNUYWdzID0gRVhJRi5HUFNUYWdzID0ge1xuICAgICAgICAweDAwMDAgOiBcIkdQU1ZlcnNpb25JRFwiLFxuICAgICAgICAweDAwMDEgOiBcIkdQU0xhdGl0dWRlUmVmXCIsXG4gICAgICAgIDB4MDAwMiA6IFwiR1BTTGF0aXR1ZGVcIixcbiAgICAgICAgMHgwMDAzIDogXCJHUFNMb25naXR1ZGVSZWZcIixcbiAgICAgICAgMHgwMDA0IDogXCJHUFNMb25naXR1ZGVcIixcbiAgICAgICAgMHgwMDA1IDogXCJHUFNBbHRpdHVkZVJlZlwiLFxuICAgICAgICAweDAwMDYgOiBcIkdQU0FsdGl0dWRlXCIsXG4gICAgICAgIDB4MDAwNyA6IFwiR1BTVGltZVN0YW1wXCIsXG4gICAgICAgIDB4MDAwOCA6IFwiR1BTU2F0ZWxsaXRlc1wiLFxuICAgICAgICAweDAwMDkgOiBcIkdQU1N0YXR1c1wiLFxuICAgICAgICAweDAwMEEgOiBcIkdQU01lYXN1cmVNb2RlXCIsXG4gICAgICAgIDB4MDAwQiA6IFwiR1BTRE9QXCIsXG4gICAgICAgIDB4MDAwQyA6IFwiR1BTU3BlZWRSZWZcIixcbiAgICAgICAgMHgwMDBEIDogXCJHUFNTcGVlZFwiLFxuICAgICAgICAweDAwMEUgOiBcIkdQU1RyYWNrUmVmXCIsXG4gICAgICAgIDB4MDAwRiA6IFwiR1BTVHJhY2tcIixcbiAgICAgICAgMHgwMDEwIDogXCJHUFNJbWdEaXJlY3Rpb25SZWZcIixcbiAgICAgICAgMHgwMDExIDogXCJHUFNJbWdEaXJlY3Rpb25cIixcbiAgICAgICAgMHgwMDEyIDogXCJHUFNNYXBEYXR1bVwiLFxuICAgICAgICAweDAwMTMgOiBcIkdQU0Rlc3RMYXRpdHVkZVJlZlwiLFxuICAgICAgICAweDAwMTQgOiBcIkdQU0Rlc3RMYXRpdHVkZVwiLFxuICAgICAgICAweDAwMTUgOiBcIkdQU0Rlc3RMb25naXR1ZGVSZWZcIixcbiAgICAgICAgMHgwMDE2IDogXCJHUFNEZXN0TG9uZ2l0dWRlXCIsXG4gICAgICAgIDB4MDAxNyA6IFwiR1BTRGVzdEJlYXJpbmdSZWZcIixcbiAgICAgICAgMHgwMDE4IDogXCJHUFNEZXN0QmVhcmluZ1wiLFxuICAgICAgICAweDAwMTkgOiBcIkdQU0Rlc3REaXN0YW5jZVJlZlwiLFxuICAgICAgICAweDAwMUEgOiBcIkdQU0Rlc3REaXN0YW5jZVwiLFxuICAgICAgICAweDAwMUIgOiBcIkdQU1Byb2Nlc3NpbmdNZXRob2RcIixcbiAgICAgICAgMHgwMDFDIDogXCJHUFNBcmVhSW5mb3JtYXRpb25cIixcbiAgICAgICAgMHgwMDFEIDogXCJHUFNEYXRlU3RhbXBcIixcbiAgICAgICAgMHgwMDFFIDogXCJHUFNEaWZmZXJlbnRpYWxcIlxuICAgIH07XG5cbiAgICAgLy8gRVhJRiAyLjMgU3BlY1xuICAgIHZhciBJRkQxVGFncyA9IEVYSUYuSUZEMVRhZ3MgPSB7XG4gICAgICAgIDB4MDEwMDogXCJJbWFnZVdpZHRoXCIsXG4gICAgICAgIDB4MDEwMTogXCJJbWFnZUhlaWdodFwiLFxuICAgICAgICAweDAxMDI6IFwiQml0c1BlclNhbXBsZVwiLFxuICAgICAgICAweDAxMDM6IFwiQ29tcHJlc3Npb25cIixcbiAgICAgICAgMHgwMTA2OiBcIlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25cIixcbiAgICAgICAgMHgwMTExOiBcIlN0cmlwT2Zmc2V0c1wiLFxuICAgICAgICAweDAxMTI6IFwiT3JpZW50YXRpb25cIixcbiAgICAgICAgMHgwMTE1OiBcIlNhbXBsZXNQZXJQaXhlbFwiLFxuICAgICAgICAweDAxMTY6IFwiUm93c1BlclN0cmlwXCIsXG4gICAgICAgIDB4MDExNzogXCJTdHJpcEJ5dGVDb3VudHNcIixcbiAgICAgICAgMHgwMTFBOiBcIlhSZXNvbHV0aW9uXCIsXG4gICAgICAgIDB4MDExQjogXCJZUmVzb2x1dGlvblwiLFxuICAgICAgICAweDAxMUM6IFwiUGxhbmFyQ29uZmlndXJhdGlvblwiLFxuICAgICAgICAweDAxMjg6IFwiUmVzb2x1dGlvblVuaXRcIixcbiAgICAgICAgMHgwMjAxOiBcIkpwZWdJRk9mZnNldFwiLCAgICAvLyBXaGVuIGltYWdlIGZvcm1hdCBpcyBKUEVHLCB0aGlzIHZhbHVlIHNob3cgb2Zmc2V0IHRvIEpQRUcgZGF0YSBzdG9yZWQuKGFrYSBcIlRodW1ibmFpbE9mZnNldFwiIG9yIFwiSlBFR0ludGVyY2hhbmdlRm9ybWF0XCIpXG4gICAgICAgIDB4MDIwMjogXCJKcGVnSUZCeXRlQ291bnRcIiwgLy8gV2hlbiBpbWFnZSBmb3JtYXQgaXMgSlBFRywgdGhpcyB2YWx1ZSBzaG93cyBkYXRhIHNpemUgb2YgSlBFRyBpbWFnZSAoYWthIFwiVGh1bWJuYWlsTGVuZ3RoXCIgb3IgXCJKUEVHSW50ZXJjaGFuZ2VGb3JtYXRMZW5ndGhcIilcbiAgICAgICAgMHgwMjExOiBcIllDYkNyQ29lZmZpY2llbnRzXCIsXG4gICAgICAgIDB4MDIxMjogXCJZQ2JDclN1YlNhbXBsaW5nXCIsXG4gICAgICAgIDB4MDIxMzogXCJZQ2JDclBvc2l0aW9uaW5nXCIsXG4gICAgICAgIDB4MDIxNDogXCJSZWZlcmVuY2VCbGFja1doaXRlXCJcbiAgICB9O1xuXG4gICAgdmFyIFN0cmluZ1ZhbHVlcyA9IEVYSUYuU3RyaW5nVmFsdWVzID0ge1xuICAgICAgICBFeHBvc3VyZVByb2dyYW0gOiB7XG4gICAgICAgICAgICAwIDogXCJOb3QgZGVmaW5lZFwiLFxuICAgICAgICAgICAgMSA6IFwiTWFudWFsXCIsXG4gICAgICAgICAgICAyIDogXCJOb3JtYWwgcHJvZ3JhbVwiLFxuICAgICAgICAgICAgMyA6IFwiQXBlcnR1cmUgcHJpb3JpdHlcIixcbiAgICAgICAgICAgIDQgOiBcIlNodXR0ZXIgcHJpb3JpdHlcIixcbiAgICAgICAgICAgIDUgOiBcIkNyZWF0aXZlIHByb2dyYW1cIixcbiAgICAgICAgICAgIDYgOiBcIkFjdGlvbiBwcm9ncmFtXCIsXG4gICAgICAgICAgICA3IDogXCJQb3J0cmFpdCBtb2RlXCIsXG4gICAgICAgICAgICA4IDogXCJMYW5kc2NhcGUgbW9kZVwiXG4gICAgICAgIH0sXG4gICAgICAgIE1ldGVyaW5nTW9kZSA6IHtcbiAgICAgICAgICAgIDAgOiBcIlVua25vd25cIixcbiAgICAgICAgICAgIDEgOiBcIkF2ZXJhZ2VcIixcbiAgICAgICAgICAgIDIgOiBcIkNlbnRlcldlaWdodGVkQXZlcmFnZVwiLFxuICAgICAgICAgICAgMyA6IFwiU3BvdFwiLFxuICAgICAgICAgICAgNCA6IFwiTXVsdGlTcG90XCIsXG4gICAgICAgICAgICA1IDogXCJQYXR0ZXJuXCIsXG4gICAgICAgICAgICA2IDogXCJQYXJ0aWFsXCIsXG4gICAgICAgICAgICAyNTUgOiBcIk90aGVyXCJcbiAgICAgICAgfSxcbiAgICAgICAgTGlnaHRTb3VyY2UgOiB7XG4gICAgICAgICAgICAwIDogXCJVbmtub3duXCIsXG4gICAgICAgICAgICAxIDogXCJEYXlsaWdodFwiLFxuICAgICAgICAgICAgMiA6IFwiRmx1b3Jlc2NlbnRcIixcbiAgICAgICAgICAgIDMgOiBcIlR1bmdzdGVuIChpbmNhbmRlc2NlbnQgbGlnaHQpXCIsXG4gICAgICAgICAgICA0IDogXCJGbGFzaFwiLFxuICAgICAgICAgICAgOSA6IFwiRmluZSB3ZWF0aGVyXCIsXG4gICAgICAgICAgICAxMCA6IFwiQ2xvdWR5IHdlYXRoZXJcIixcbiAgICAgICAgICAgIDExIDogXCJTaGFkZVwiLFxuICAgICAgICAgICAgMTIgOiBcIkRheWxpZ2h0IGZsdW9yZXNjZW50IChEIDU3MDAgLSA3MTAwSylcIixcbiAgICAgICAgICAgIDEzIDogXCJEYXkgd2hpdGUgZmx1b3Jlc2NlbnQgKE4gNDYwMCAtIDU0MDBLKVwiLFxuICAgICAgICAgICAgMTQgOiBcIkNvb2wgd2hpdGUgZmx1b3Jlc2NlbnQgKFcgMzkwMCAtIDQ1MDBLKVwiLFxuICAgICAgICAgICAgMTUgOiBcIldoaXRlIGZsdW9yZXNjZW50IChXVyAzMjAwIC0gMzcwMEspXCIsXG4gICAgICAgICAgICAxNyA6IFwiU3RhbmRhcmQgbGlnaHQgQVwiLFxuICAgICAgICAgICAgMTggOiBcIlN0YW5kYXJkIGxpZ2h0IEJcIixcbiAgICAgICAgICAgIDE5IDogXCJTdGFuZGFyZCBsaWdodCBDXCIsXG4gICAgICAgICAgICAyMCA6IFwiRDU1XCIsXG4gICAgICAgICAgICAyMSA6IFwiRDY1XCIsXG4gICAgICAgICAgICAyMiA6IFwiRDc1XCIsXG4gICAgICAgICAgICAyMyA6IFwiRDUwXCIsXG4gICAgICAgICAgICAyNCA6IFwiSVNPIHN0dWRpbyB0dW5nc3RlblwiLFxuICAgICAgICAgICAgMjU1IDogXCJPdGhlclwiXG4gICAgICAgIH0sXG4gICAgICAgIEZsYXNoIDoge1xuICAgICAgICAgICAgMHgwMDAwIDogXCJGbGFzaCBkaWQgbm90IGZpcmVcIixcbiAgICAgICAgICAgIDB4MDAwMSA6IFwiRmxhc2ggZmlyZWRcIixcbiAgICAgICAgICAgIDB4MDAwNSA6IFwiU3Ryb2JlIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIixcbiAgICAgICAgICAgIDB4MDAwNyA6IFwiU3Ryb2JlIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLFxuICAgICAgICAgICAgMHgwMDA5IDogXCJGbGFzaCBmaXJlZCwgY29tcHVsc29yeSBmbGFzaCBtb2RlXCIsXG4gICAgICAgICAgICAweDAwMEQgOiBcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIixcbiAgICAgICAgICAgIDB4MDAwRiA6IFwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmV0dXJuIGxpZ2h0IGRldGVjdGVkXCIsXG4gICAgICAgICAgICAweDAwMTAgOiBcIkZsYXNoIGRpZCBub3QgZmlyZSwgY29tcHVsc29yeSBmbGFzaCBtb2RlXCIsXG4gICAgICAgICAgICAweDAwMTggOiBcIkZsYXNoIGRpZCBub3QgZmlyZSwgYXV0byBtb2RlXCIsXG4gICAgICAgICAgICAweDAwMTkgOiBcIkZsYXNoIGZpcmVkLCBhdXRvIG1vZGVcIixcbiAgICAgICAgICAgIDB4MDAxRCA6IFwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZFwiLFxuICAgICAgICAgICAgMHgwMDFGIDogXCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWRcIixcbiAgICAgICAgICAgIDB4MDAyMCA6IFwiTm8gZmxhc2ggZnVuY3Rpb25cIixcbiAgICAgICAgICAgIDB4MDA0MSA6IFwiRmxhc2ggZmlyZWQsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGVcIixcbiAgICAgICAgICAgIDB4MDA0NSA6IFwiRmxhc2ggZmlyZWQsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIixcbiAgICAgICAgICAgIDB4MDA0NyA6IFwiRmxhc2ggZmlyZWQsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLFxuICAgICAgICAgICAgMHgwMDQ5IDogXCJGbGFzaCBmaXJlZCwgY29tcHVsc29yeSBmbGFzaCBtb2RlLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlXCIsXG4gICAgICAgICAgICAweDAwNEQgOiBcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIixcbiAgICAgICAgICAgIDB4MDA0RiA6IFwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZSwgcmV0dXJuIGxpZ2h0IGRldGVjdGVkXCIsXG4gICAgICAgICAgICAweDAwNTkgOiBcIkZsYXNoIGZpcmVkLCBhdXRvIG1vZGUsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGVcIixcbiAgICAgICAgICAgIDB4MDA1RCA6IFwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiLFxuICAgICAgICAgICAgMHgwMDVGIDogXCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWQsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGVcIlxuICAgICAgICB9LFxuICAgICAgICBTZW5zaW5nTWV0aG9kIDoge1xuICAgICAgICAgICAgMSA6IFwiTm90IGRlZmluZWRcIixcbiAgICAgICAgICAgIDIgOiBcIk9uZS1jaGlwIGNvbG9yIGFyZWEgc2Vuc29yXCIsXG4gICAgICAgICAgICAzIDogXCJUd28tY2hpcCBjb2xvciBhcmVhIHNlbnNvclwiLFxuICAgICAgICAgICAgNCA6IFwiVGhyZWUtY2hpcCBjb2xvciBhcmVhIHNlbnNvclwiLFxuICAgICAgICAgICAgNSA6IFwiQ29sb3Igc2VxdWVudGlhbCBhcmVhIHNlbnNvclwiLFxuICAgICAgICAgICAgNyA6IFwiVHJpbGluZWFyIHNlbnNvclwiLFxuICAgICAgICAgICAgOCA6IFwiQ29sb3Igc2VxdWVudGlhbCBsaW5lYXIgc2Vuc29yXCJcbiAgICAgICAgfSxcbiAgICAgICAgU2NlbmVDYXB0dXJlVHlwZSA6IHtcbiAgICAgICAgICAgIDAgOiBcIlN0YW5kYXJkXCIsXG4gICAgICAgICAgICAxIDogXCJMYW5kc2NhcGVcIixcbiAgICAgICAgICAgIDIgOiBcIlBvcnRyYWl0XCIsXG4gICAgICAgICAgICAzIDogXCJOaWdodCBzY2VuZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFNjZW5lVHlwZSA6IHtcbiAgICAgICAgICAgIDEgOiBcIkRpcmVjdGx5IHBob3RvZ3JhcGhlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIEN1c3RvbVJlbmRlcmVkIDoge1xuICAgICAgICAgICAgMCA6IFwiTm9ybWFsIHByb2Nlc3NcIixcbiAgICAgICAgICAgIDEgOiBcIkN1c3RvbSBwcm9jZXNzXCJcbiAgICAgICAgfSxcbiAgICAgICAgV2hpdGVCYWxhbmNlIDoge1xuICAgICAgICAgICAgMCA6IFwiQXV0byB3aGl0ZSBiYWxhbmNlXCIsXG4gICAgICAgICAgICAxIDogXCJNYW51YWwgd2hpdGUgYmFsYW5jZVwiXG4gICAgICAgIH0sXG4gICAgICAgIEdhaW5Db250cm9sIDoge1xuICAgICAgICAgICAgMCA6IFwiTm9uZVwiLFxuICAgICAgICAgICAgMSA6IFwiTG93IGdhaW4gdXBcIixcbiAgICAgICAgICAgIDIgOiBcIkhpZ2ggZ2FpbiB1cFwiLFxuICAgICAgICAgICAgMyA6IFwiTG93IGdhaW4gZG93blwiLFxuICAgICAgICAgICAgNCA6IFwiSGlnaCBnYWluIGRvd25cIlxuICAgICAgICB9LFxuICAgICAgICBDb250cmFzdCA6IHtcbiAgICAgICAgICAgIDAgOiBcIk5vcm1hbFwiLFxuICAgICAgICAgICAgMSA6IFwiU29mdFwiLFxuICAgICAgICAgICAgMiA6IFwiSGFyZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFNhdHVyYXRpb24gOiB7XG4gICAgICAgICAgICAwIDogXCJOb3JtYWxcIixcbiAgICAgICAgICAgIDEgOiBcIkxvdyBzYXR1cmF0aW9uXCIsXG4gICAgICAgICAgICAyIDogXCJIaWdoIHNhdHVyYXRpb25cIlxuICAgICAgICB9LFxuICAgICAgICBTaGFycG5lc3MgOiB7XG4gICAgICAgICAgICAwIDogXCJOb3JtYWxcIixcbiAgICAgICAgICAgIDEgOiBcIlNvZnRcIixcbiAgICAgICAgICAgIDIgOiBcIkhhcmRcIlxuICAgICAgICB9LFxuICAgICAgICBTdWJqZWN0RGlzdGFuY2VSYW5nZSA6IHtcbiAgICAgICAgICAgIDAgOiBcIlVua25vd25cIixcbiAgICAgICAgICAgIDEgOiBcIk1hY3JvXCIsXG4gICAgICAgICAgICAyIDogXCJDbG9zZSB2aWV3XCIsXG4gICAgICAgICAgICAzIDogXCJEaXN0YW50IHZpZXdcIlxuICAgICAgICB9LFxuICAgICAgICBGaWxlU291cmNlIDoge1xuICAgICAgICAgICAgMyA6IFwiRFNDXCJcbiAgICAgICAgfSxcblxuICAgICAgICBDb21wb25lbnRzIDoge1xuICAgICAgICAgICAgMCA6IFwiXCIsXG4gICAgICAgICAgICAxIDogXCJZXCIsXG4gICAgICAgICAgICAyIDogXCJDYlwiLFxuICAgICAgICAgICAgMyA6IFwiQ3JcIixcbiAgICAgICAgICAgIDQgOiBcIlJcIixcbiAgICAgICAgICAgIDUgOiBcIkdcIixcbiAgICAgICAgICAgIDYgOiBcIkJcIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50KGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgIGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoXCJvblwiICsgZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW1hZ2VIYXNEYXRhKGltZykge1xuICAgICAgICByZXR1cm4gISEoaW1nLmV4aWZkYXRhKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGJhc2U2NFRvQXJyYXlCdWZmZXIoYmFzZTY0LCBjb250ZW50VHlwZSkge1xuICAgICAgICBjb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlIHx8IGJhc2U2NC5tYXRjaCgvXmRhdGFcXDooW15cXDtdKylcXDtiYXNlNjQsL21pKVsxXSB8fCAnJzsgLy8gZS5nLiAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwuLi4nID0+ICdpbWFnZS9qcGVnJ1xuICAgICAgICBiYXNlNjQgPSBiYXNlNjQucmVwbGFjZSgvXmRhdGFcXDooW15cXDtdKylcXDtiYXNlNjQsL2dtaSwgJycpO1xuICAgICAgICB2YXIgYmluYXJ5ID0gYXRvYihiYXNlNjQpO1xuICAgICAgICB2YXIgbGVuID0gYmluYXJ5Lmxlbmd0aDtcbiAgICAgICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihsZW4pO1xuICAgICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZpZXdbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9iamVjdFVSTFRvQmxvYih1cmwsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGh0dHAub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICBodHRwLnJlc3BvbnNlVHlwZSA9IFwiYmxvYlwiO1xuICAgICAgICBodHRwLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDAgfHwgdGhpcy5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaHR0cC5zZW5kKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW1hZ2VEYXRhKGltZywgY2FsbGJhY2spIHtcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQmluYXJ5RmlsZShiaW5GaWxlKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IGZpbmRFWElGaW5KUEVHKGJpbkZpbGUpO1xuICAgICAgICAgICAgaW1nLmV4aWZkYXRhID0gZGF0YSB8fCB7fTtcbiAgICAgICAgICAgIHZhciBpcHRjZGF0YSA9IGZpbmRJUFRDaW5KUEVHKGJpbkZpbGUpO1xuICAgICAgICAgICAgaW1nLmlwdGNkYXRhID0gaXB0Y2RhdGEgfHwge307XG4gICAgICAgICAgICBpZiAoRVhJRi5pc1htcEVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgIHZhciB4bXBkYXRhPSBmaW5kWE1QaW5KUEVHKGJpbkZpbGUpO1xuICAgICAgICAgICAgICAgaW1nLnhtcGRhdGEgPSB4bXBkYXRhIHx8IHt9OyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChpbWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGltZy5zcmMpIHtcbiAgICAgICAgICAgIGlmICgvXmRhdGFcXDovaS50ZXN0KGltZy5zcmMpKSB7IC8vIERhdGEgVVJJXG4gICAgICAgICAgICAgICAgdmFyIGFycmF5QnVmZmVyID0gYmFzZTY0VG9BcnJheUJ1ZmZlcihpbWcuc3JjKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVCaW5hcnlGaWxlKGFycmF5QnVmZmVyKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICgvXmJsb2JcXDovaS50ZXN0KGltZy5zcmMpKSB7IC8vIE9iamVjdCBVUkxcbiAgICAgICAgICAgICAgICB2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUJpbmFyeUZpbGUoZS50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9iamVjdFVSTFRvQmxvYihpbWcuc3JjLCBmdW5jdGlvbiAoYmxvYikge1xuICAgICAgICAgICAgICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIGh0dHAub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDAgfHwgdGhpcy5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUJpbmFyeUZpbGUoaHR0cC5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIkNvdWxkIG5vdCBsb2FkIGltYWdlXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaHR0cCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBodHRwLm9wZW4oXCJHRVRcIiwgaW1nLnNyYywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaHR0cC5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgICAgICAgICAgICAgaHR0cC5zZW5kKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNlbGYuRmlsZVJlYWRlciAmJiAoaW1nIGluc3RhbmNlb2Ygc2VsZi5CbG9iIHx8IGltZyBpbnN0YW5jZW9mIHNlbGYuRmlsZSkpIHtcbiAgICAgICAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJHb3QgZmlsZSBvZiBsZW5ndGggXCIgKyBlLnRhcmdldC5yZXN1bHQuYnl0ZUxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaGFuZGxlQmluYXJ5RmlsZShlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihpbWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZEVYSUZpbkpQRUcoZmlsZSkge1xuICAgICAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoZmlsZSk7XG5cbiAgICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIkdvdCBmaWxlIG9mIGxlbmd0aCBcIiArIGZpbGUuYnl0ZUxlbmd0aCk7XG4gICAgICAgIGlmICgoZGF0YVZpZXcuZ2V0VWludDgoMCkgIT0gMHhGRikgfHwgKGRhdGFWaWV3LmdldFVpbnQ4KDEpICE9IDB4RDgpKSB7XG4gICAgICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiTm90IGEgdmFsaWQgSlBFR1wiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm90IGEgdmFsaWQganBlZ1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IDIsXG4gICAgICAgICAgICBsZW5ndGggPSBmaWxlLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICBtYXJrZXI7XG5cbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgIT0gMHhGRikge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJOb3QgYSB2YWxpZCBtYXJrZXIgYXQgb2Zmc2V0IFwiICsgb2Zmc2V0ICsgXCIsIGZvdW5kOiBcIiArIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm90IGEgdmFsaWQgbWFya2VyLCBzb21ldGhpbmcgaXMgd3JvbmdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFya2VyID0gZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgMSk7XG4gICAgICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKG1hcmtlcik7XG5cbiAgICAgICAgICAgIC8vIHdlIGNvdWxkIGltcGxlbWVudCBoYW5kbGluZyBmb3Igb3RoZXIgbWFya2VycyBoZXJlLFxuICAgICAgICAgICAgLy8gYnV0IHdlJ3JlIG9ubHkgbG9va2luZyBmb3IgMHhGRkUxIGZvciBFWElGIGRhdGFcblxuICAgICAgICAgICAgaWYgKG1hcmtlciA9PSAyMjUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiRm91bmQgMHhGRkUxIG1hcmtlclwiKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZWFkRVhJRkRhdGEoZGF0YVZpZXcsIG9mZnNldCArIDQsIGRhdGFWaWV3LmdldFVpbnQxNihvZmZzZXQgKyAyKSAtIDIpO1xuXG4gICAgICAgICAgICAgICAgLy8gb2Zmc2V0ICs9IDIgKyBmaWxlLmdldFNob3J0QXQob2Zmc2V0KzIsIHRydWUpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSAyICsgZGF0YVZpZXcuZ2V0VWludDE2KG9mZnNldCsyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kSVBUQ2luSlBFRyhmaWxlKSB7XG4gICAgICAgIHZhciBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhmaWxlKTtcblxuICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiR290IGZpbGUgb2YgbGVuZ3RoIFwiICsgZmlsZS5ieXRlTGVuZ3RoKTtcbiAgICAgICAgaWYgKChkYXRhVmlldy5nZXRVaW50OCgwKSAhPSAweEZGKSB8fCAoZGF0YVZpZXcuZ2V0VWludDgoMSkgIT0gMHhEOCkpIHtcbiAgICAgICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJOb3QgYSB2YWxpZCBKUEVHXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBub3QgYSB2YWxpZCBqcGVnXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2Zmc2V0ID0gMixcbiAgICAgICAgICAgIGxlbmd0aCA9IGZpbGUuYnl0ZUxlbmd0aDtcblxuXG4gICAgICAgIHZhciBpc0ZpZWxkU2VnbWVudFN0YXJ0ID0gZnVuY3Rpb24oZGF0YVZpZXcsIG9mZnNldCl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgPT09IDB4MzggJiZcbiAgICAgICAgICAgICAgICBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQrMSkgPT09IDB4NDIgJiZcbiAgICAgICAgICAgICAgICBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQrMikgPT09IDB4NDkgJiZcbiAgICAgICAgICAgICAgICBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQrMykgPT09IDB4NEQgJiZcbiAgICAgICAgICAgICAgICBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQrNCkgPT09IDB4MDQgJiZcbiAgICAgICAgICAgICAgICBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQrNSkgPT09IDB4MDRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IGxlbmd0aCkge1xuXG4gICAgICAgICAgICBpZiAoIGlzRmllbGRTZWdtZW50U3RhcnQoZGF0YVZpZXcsIG9mZnNldCApKXtcblxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBuYW1lIGhlYWRlciAod2hpY2ggaXMgcGFkZGVkIHRvIGFuIGV2ZW4gbnVtYmVyIG9mIGJ5dGVzKVxuICAgICAgICAgICAgICAgIHZhciBuYW1lSGVhZGVyTGVuZ3RoID0gZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KzcpO1xuICAgICAgICAgICAgICAgIGlmKG5hbWVIZWFkZXJMZW5ndGggJSAyICE9PSAwKSBuYW1lSGVhZGVyTGVuZ3RoICs9IDE7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHByZSBwaG90b3Nob3AgNiBmb3JtYXRcbiAgICAgICAgICAgICAgICBpZihuYW1lSGVhZGVyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFsd2F5cyA0XG4gICAgICAgICAgICAgICAgICAgIG5hbWVIZWFkZXJMZW5ndGggPSA0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBzdGFydE9mZnNldCA9IG9mZnNldCArIDggKyBuYW1lSGVhZGVyTGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uTGVuZ3RoID0gZGF0YVZpZXcuZ2V0VWludDE2KG9mZnNldCArIDYgKyBuYW1lSGVhZGVyTGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZWFkSVBUQ0RhdGEoZmlsZSwgc3RhcnRPZmZzZXQsIHNlY3Rpb25MZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBOb3QgdGhlIG1hcmtlciwgY29udGludWUgc2VhcmNoaW5nXG4gICAgICAgICAgICBvZmZzZXQrKztcblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgdmFyIElwdGNGaWVsZE1hcCA9IHtcbiAgICAgICAgMHg3OCA6ICdjYXB0aW9uJyxcbiAgICAgICAgMHg2RSA6ICdjcmVkaXQnLFxuICAgICAgICAweDE5IDogJ2tleXdvcmRzJyxcbiAgICAgICAgMHgzNyA6ICdkYXRlQ3JlYXRlZCcsXG4gICAgICAgIDB4NTAgOiAnYnlsaW5lJyxcbiAgICAgICAgMHg1NSA6ICdieWxpbmVUaXRsZScsXG4gICAgICAgIDB4N0EgOiAnY2FwdGlvbldyaXRlcicsXG4gICAgICAgIDB4NjkgOiAnaGVhZGxpbmUnLFxuICAgICAgICAweDc0IDogJ2NvcHlyaWdodCcsXG4gICAgICAgIDB4MEYgOiAnY2F0ZWdvcnknXG4gICAgfTtcbiAgICBmdW5jdGlvbiByZWFkSVBUQ0RhdGEoZmlsZSwgc3RhcnRPZmZzZXQsIHNlY3Rpb25MZW5ndGgpe1xuICAgICAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoZmlsZSk7XG4gICAgICAgIHZhciBkYXRhID0ge307XG4gICAgICAgIHZhciBmaWVsZFZhbHVlLCBmaWVsZE5hbWUsIGRhdGFTaXplLCBzZWdtZW50VHlwZSwgc2VnbWVudFNpemU7XG4gICAgICAgIHZhciBzZWdtZW50U3RhcnRQb3MgPSBzdGFydE9mZnNldDtcbiAgICAgICAgd2hpbGUoc2VnbWVudFN0YXJ0UG9zIDwgc3RhcnRPZmZzZXQrc2VjdGlvbkxlbmd0aCkge1xuICAgICAgICAgICAgaWYoZGF0YVZpZXcuZ2V0VWludDgoc2VnbWVudFN0YXJ0UG9zKSA9PT0gMHgxQyAmJiBkYXRhVmlldy5nZXRVaW50OChzZWdtZW50U3RhcnRQb3MrMSkgPT09IDB4MDIpe1xuICAgICAgICAgICAgICAgIHNlZ21lbnRUeXBlID0gZGF0YVZpZXcuZ2V0VWludDgoc2VnbWVudFN0YXJ0UG9zKzIpO1xuICAgICAgICAgICAgICAgIGlmKHNlZ21lbnRUeXBlIGluIElwdGNGaWVsZE1hcCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhU2l6ZSA9IGRhdGFWaWV3LmdldEludDE2KHNlZ21lbnRTdGFydFBvcyszKTtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudFNpemUgPSBkYXRhU2l6ZSArIDU7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IElwdGNGaWVsZE1hcFtzZWdtZW50VHlwZV07XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSBnZXRTdHJpbmdGcm9tREIoZGF0YVZpZXcsIHNlZ21lbnRTdGFydFBvcys1LCBkYXRhU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIGFscmVhZHkgc3RvcmVkIGEgdmFsdWUgd2l0aCB0aGlzIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eShmaWVsZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBWYWx1ZSBhbHJlYWR5IHN0b3JlZCB3aXRoIHRoaXMgbmFtZSwgY3JlYXRlIG11bHRpdmFsdWUgZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGFbZmllbGROYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtmaWVsZE5hbWVdLnB1c2goZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ZpZWxkTmFtZV0gPSBbZGF0YVtmaWVsZE5hbWVdLCBmaWVsZFZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbZmllbGROYW1lXSA9IGZpZWxkVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlZ21lbnRTdGFydFBvcysrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiByZWFkVGFncyhmaWxlLCB0aWZmU3RhcnQsIGRpclN0YXJ0LCBzdHJpbmdzLCBiaWdFbmQpIHtcbiAgICAgICAgdmFyIGVudHJpZXMgPSBmaWxlLmdldFVpbnQxNihkaXJTdGFydCwgIWJpZ0VuZCksXG4gICAgICAgICAgICB0YWdzID0ge30sXG4gICAgICAgICAgICBlbnRyeU9mZnNldCwgdGFnLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBmb3IgKGk9MDtpPGVudHJpZXM7aSsrKSB7XG4gICAgICAgICAgICBlbnRyeU9mZnNldCA9IGRpclN0YXJ0ICsgaSoxMiArIDI7XG4gICAgICAgICAgICB0YWcgPSBzdHJpbmdzW2ZpbGUuZ2V0VWludDE2KGVudHJ5T2Zmc2V0LCAhYmlnRW5kKV07XG4gICAgICAgICAgICBpZiAoIXRhZyAmJiBkZWJ1ZykgY29uc29sZS5sb2coXCJVbmtub3duIHRhZzogXCIgKyBmaWxlLmdldFVpbnQxNihlbnRyeU9mZnNldCwgIWJpZ0VuZCkpO1xuICAgICAgICAgICAgdGFnc1t0YWddID0gcmVhZFRhZ1ZhbHVlKGZpbGUsIGVudHJ5T2Zmc2V0LCB0aWZmU3RhcnQsIGRpclN0YXJ0LCBiaWdFbmQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWdzO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcmVhZFRhZ1ZhbHVlKGZpbGUsIGVudHJ5T2Zmc2V0LCB0aWZmU3RhcnQsIGRpclN0YXJ0LCBiaWdFbmQpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBmaWxlLmdldFVpbnQxNihlbnRyeU9mZnNldCsyLCAhYmlnRW5kKSxcbiAgICAgICAgICAgIG51bVZhbHVlcyA9IGZpbGUuZ2V0VWludDMyKGVudHJ5T2Zmc2V0KzQsICFiaWdFbmQpLFxuICAgICAgICAgICAgdmFsdWVPZmZzZXQgPSBmaWxlLmdldFVpbnQzMihlbnRyeU9mZnNldCs4LCAhYmlnRW5kKSArIHRpZmZTdGFydCxcbiAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgIHZhbHMsIHZhbCwgbixcbiAgICAgICAgICAgIG51bWVyYXRvciwgZGVub21pbmF0b3I7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDE6IC8vIGJ5dGUsIDgtYml0IHVuc2lnbmVkIGludFxuICAgICAgICAgICAgY2FzZSA3OiAvLyB1bmRlZmluZWQsIDgtYml0IGJ5dGUsIHZhbHVlIGRlcGVuZGluZyBvbiBmaWVsZFxuICAgICAgICAgICAgICAgIGlmIChudW1WYWx1ZXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZS5nZXRVaW50OChlbnRyeU9mZnNldCArIDgsICFiaWdFbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IG51bVZhbHVlcyA+IDQgPyB2YWx1ZU9mZnNldCA6IChlbnRyeU9mZnNldCArIDgpO1xuICAgICAgICAgICAgICAgICAgICB2YWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobj0wO248bnVtVmFsdWVzO24rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tuXSA9IGZpbGUuZ2V0VWludDgob2Zmc2V0ICsgbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIDI6IC8vIGFzY2lpLCA4LWJpdCBieXRlXG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gbnVtVmFsdWVzID4gNCA/IHZhbHVlT2Zmc2V0IDogKGVudHJ5T2Zmc2V0ICsgOCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFN0cmluZ0Zyb21EQihmaWxlLCBvZmZzZXQsIG51bVZhbHVlcy0xKTtcblxuICAgICAgICAgICAgY2FzZSAzOiAvLyBzaG9ydCwgMTYgYml0IGludFxuICAgICAgICAgICAgICAgIGlmIChudW1WYWx1ZXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZS5nZXRVaW50MTYoZW50cnlPZmZzZXQgKyA4LCAhYmlnRW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBudW1WYWx1ZXMgPiAyID8gdmFsdWVPZmZzZXQgOiAoZW50cnlPZmZzZXQgKyA4KTtcbiAgICAgICAgICAgICAgICAgICAgdmFscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG49MDtuPG51bVZhbHVlcztuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHNbbl0gPSBmaWxlLmdldFVpbnQxNihvZmZzZXQgKyAyKm4sICFiaWdFbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSA0OiAvLyBsb25nLCAzMiBiaXQgaW50XG4gICAgICAgICAgICAgICAgaWYgKG51bVZhbHVlcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlLmdldFVpbnQzMihlbnRyeU9mZnNldCArIDgsICFiaWdFbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuPTA7bjxudW1WYWx1ZXM7bisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxzW25dID0gZmlsZS5nZXRVaW50MzIodmFsdWVPZmZzZXQgKyA0Km4sICFiaWdFbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSA1OiAgICAvLyByYXRpb25hbCA9IHR3byBsb25nIHZhbHVlcywgZmlyc3QgaXMgbnVtZXJhdG9yLCBzZWNvbmQgaXMgZGVub21pbmF0b3JcbiAgICAgICAgICAgICAgICBpZiAobnVtVmFsdWVzID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtZXJhdG9yID0gZmlsZS5nZXRVaW50MzIodmFsdWVPZmZzZXQsICFiaWdFbmQpO1xuICAgICAgICAgICAgICAgICAgICBkZW5vbWluYXRvciA9IGZpbGUuZ2V0VWludDMyKHZhbHVlT2Zmc2V0KzQsICFiaWdFbmQpO1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBuZXcgTnVtYmVyKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsLm51bWVyYXRvciA9IG51bWVyYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgdmFsLmRlbm9taW5hdG9yID0gZGVub21pbmF0b3I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG49MDtuPG51bVZhbHVlcztuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWVyYXRvciA9IGZpbGUuZ2V0VWludDMyKHZhbHVlT2Zmc2V0ICsgOCpuLCAhYmlnRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbm9taW5hdG9yID0gZmlsZS5nZXRVaW50MzIodmFsdWVPZmZzZXQrNCArIDgqbiwgIWJpZ0VuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxzW25dID0gbmV3IE51bWJlcihudW1lcmF0b3IgLyBkZW5vbWluYXRvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxzW25dLm51bWVyYXRvciA9IG51bWVyYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHNbbl0uZGVub21pbmF0b3IgPSBkZW5vbWluYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFscztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgOTogLy8gc2xvbmcsIDMyIGJpdCBzaWduZWQgaW50XG4gICAgICAgICAgICAgICAgaWYgKG51bVZhbHVlcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlLmdldEludDMyKGVudHJ5T2Zmc2V0ICsgOCwgIWJpZ0VuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG49MDtuPG51bVZhbHVlcztuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHNbbl0gPSBmaWxlLmdldEludDMyKHZhbHVlT2Zmc2V0ICsgNCpuLCAhYmlnRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFscztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgMTA6IC8vIHNpZ25lZCByYXRpb25hbCwgdHdvIHNsb25ncywgZmlyc3QgaXMgbnVtZXJhdG9yLCBzZWNvbmQgaXMgZGVub21pbmF0b3JcbiAgICAgICAgICAgICAgICBpZiAobnVtVmFsdWVzID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGUuZ2V0SW50MzIodmFsdWVPZmZzZXQsICFiaWdFbmQpIC8gZmlsZS5nZXRJbnQzMih2YWx1ZU9mZnNldCs0LCAhYmlnRW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobj0wO248bnVtVmFsdWVzO24rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tuXSA9IGZpbGUuZ2V0SW50MzIodmFsdWVPZmZzZXQgKyA4Km4sICFiaWdFbmQpIC8gZmlsZS5nZXRJbnQzMih2YWx1ZU9mZnNldCs0ICsgOCpuLCAhYmlnRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFscztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEdpdmVuIGFuIElGRCAoSW1hZ2UgRmlsZSBEaXJlY3RvcnkpIHN0YXJ0IG9mZnNldFxuICAgICogcmV0dXJucyBhbiBvZmZzZXQgdG8gbmV4dCBJRkQgb3IgMCBpZiBpdCdzIHRoZSBsYXN0IElGRC5cbiAgICAqL1xuICAgIGZ1bmN0aW9uIGdldE5leHRJRkRPZmZzZXQoZGF0YVZpZXcsIGRpclN0YXJ0LCBiaWdFbmQpe1xuICAgICAgICAvL3RoZSBmaXJzdCAyYnl0ZXMgbWVhbnMgdGhlIG51bWJlciBvZiBkaXJlY3RvcnkgZW50cmllcyBjb250YWlucyBpbiB0aGlzIElGRFxuICAgICAgICB2YXIgZW50cmllcyA9IGRhdGFWaWV3LmdldFVpbnQxNihkaXJTdGFydCwgIWJpZ0VuZCk7XG5cbiAgICAgICAgLy8gQWZ0ZXIgbGFzdCBkaXJlY3RvcnkgZW50cnksIHRoZXJlIGlzIGEgNGJ5dGVzIG9mIGRhdGEsXG4gICAgICAgIC8vIGl0IG1lYW5zIGFuIG9mZnNldCB0byBuZXh0IElGRC5cbiAgICAgICAgLy8gSWYgaXRzIHZhbHVlIGlzICcweDAwMDAwMDAwJywgaXQgbWVhbnMgdGhpcyBpcyB0aGUgbGFzdCBJRkQgYW5kIHRoZXJlIGlzIG5vIGxpbmtlZCBJRkQuXG5cbiAgICAgICAgcmV0dXJuIGRhdGFWaWV3LmdldFVpbnQzMihkaXJTdGFydCArIDIgKyBlbnRyaWVzICogMTIsICFiaWdFbmQpOyAvLyBlYWNoIGVudHJ5IGlzIDEyIGJ5dGVzIGxvbmdcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFkVGh1bWJuYWlsSW1hZ2UoZGF0YVZpZXcsIHRpZmZTdGFydCwgZmlyc3RJRkRPZmZzZXQsIGJpZ0VuZCl7XG4gICAgICAgIC8vIGdldCB0aGUgSUZEMSBvZmZzZXRcbiAgICAgICAgdmFyIElGRDFPZmZzZXRQb2ludGVyID0gZ2V0TmV4dElGRE9mZnNldChkYXRhVmlldywgdGlmZlN0YXJ0K2ZpcnN0SUZET2Zmc2V0LCBiaWdFbmQpO1xuXG4gICAgICAgIGlmICghSUZEMU9mZnNldFBvaW50ZXIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCcqKioqKioqKiBJRkQxT2Zmc2V0IGlzIGVtcHR5LCBpbWFnZSB0aHVtYiBub3QgZm91bmQgKioqKioqKionKTtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChJRkQxT2Zmc2V0UG9pbnRlciA+IGRhdGFWaWV3LmJ5dGVMZW5ndGgpIHsgLy8gdGhpcyBzaG91bGQgbm90IGhhcHBlblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJyoqKioqKioqIElGRDFPZmZzZXQgaXMgb3V0c2lkZSB0aGUgYm91bmRzIG9mIHRoZSBEYXRhVmlldyAqKioqKioqKicpO1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCcqKioqKioqICB0aHVtYm5haWwgSUZEIG9mZnNldCAoSUZEMSkgaXM6ICVzJywgSUZEMU9mZnNldFBvaW50ZXIpO1xuXG4gICAgICAgIHZhciB0aHVtYlRhZ3MgPSByZWFkVGFncyhkYXRhVmlldywgdGlmZlN0YXJ0LCB0aWZmU3RhcnQgKyBJRkQxT2Zmc2V0UG9pbnRlciwgSUZEMVRhZ3MsIGJpZ0VuZClcblxuICAgICAgICAvLyBFWElGIDIuMyBzcGVjaWZpY2F0aW9uIGZvciBKUEVHIGZvcm1hdCB0aHVtYm5haWxcblxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgb2YgQ29tcHJlc3Npb24oMHgwMTAzKSBUYWcgaW4gSUZEMSBpcyAnNicsIHRodW1ibmFpbCBpbWFnZSBmb3JtYXQgaXMgSlBFRy5cbiAgICAgICAgLy8gTW9zdCBvZiBFeGlmIGltYWdlIHVzZXMgSlBFRyBmb3JtYXQgZm9yIHRodW1ibmFpbC4gSW4gdGhhdCBjYXNlLCB5b3UgY2FuIGdldCBvZmZzZXQgb2YgdGh1bWJuYWlsXG4gICAgICAgIC8vIGJ5IEpwZWdJRk9mZnNldCgweDAyMDEpIFRhZyBpbiBJRkQxLCBzaXplIG9mIHRodW1ibmFpbCBieSBKcGVnSUZCeXRlQ291bnQoMHgwMjAyKSBUYWcuXG4gICAgICAgIC8vIERhdGEgZm9ybWF0IGlzIG9yZGluYXJ5IEpQRUcgZm9ybWF0LCBzdGFydHMgZnJvbSAweEZGRDggYW5kIGVuZHMgYnkgMHhGRkQ5LiBJdCBzZWVtcyB0aGF0XG4gICAgICAgIC8vIEpQRUcgZm9ybWF0IGFuZCAxNjB4MTIwcGl4ZWxzIG9mIHNpemUgYXJlIHJlY29tbWVuZGVkIHRodW1ibmFpbCBmb3JtYXQgZm9yIEV4aWYyLjEgb3IgbGF0ZXIuXG5cbiAgICAgICAgaWYgKHRodW1iVGFnc1snQ29tcHJlc3Npb24nXSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1RodW1ibmFpbCBpbWFnZSBmb3VuZCEnKTtcblxuICAgICAgICAgICAgc3dpdGNoICh0aHVtYlRhZ3NbJ0NvbXByZXNzaW9uJ10pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdUaHVtYm5haWwgaW1hZ2UgZm9ybWF0IGlzIEpQRUcnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRodW1iVGFncy5KcGVnSUZPZmZzZXQgJiYgdGh1bWJUYWdzLkpwZWdJRkJ5dGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBleHRyYWN0IHRoZSB0aHVtYm5haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0T2Zmc2V0ID0gdGlmZlN0YXJ0ICsgdGh1bWJUYWdzLkpwZWdJRk9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0TGVuZ3RoID0gdGh1bWJUYWdzLkpwZWdJRkJ5dGVDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iVGFnc1snYmxvYiddID0gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KGRhdGFWaWV3LmJ1ZmZlciwgdE9mZnNldCwgdExlbmd0aCldLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlL2pwZWcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaHVtYm5haWwgaW1hZ2UgZm9ybWF0IGlzIFRJRkYsIHdoaWNoIGlzIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5rbm93biB0aHVtYm5haWwgaW1hZ2UgZm9ybWF0ICclcydcIiwgdGh1bWJUYWdzWydDb21wcmVzc2lvbiddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aHVtYlRhZ3NbJ1Bob3RvbWV0cmljSW50ZXJwcmV0YXRpb24nXSA9PSAyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRodW1ibmFpbCBpbWFnZSBmb3JtYXQgaXMgUkdCLCB3aGljaCBpcyBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aHVtYlRhZ3M7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbURCKGJ1ZmZlciwgc3RhcnQsIGxlbmd0aCkge1xuICAgICAgICB2YXIgb3V0c3RyID0gXCJcIjtcbiAgICAgICAgZm9yIChuID0gc3RhcnQ7IG4gPCBzdGFydCtsZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgb3V0c3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmZmVyLmdldFVpbnQ4KG4pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0c3RyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWRFWElGRGF0YShmaWxlLCBzdGFydCkge1xuICAgICAgICBpZiAoZ2V0U3RyaW5nRnJvbURCKGZpbGUsIHN0YXJ0LCA0KSAhPSBcIkV4aWZcIikge1xuICAgICAgICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIk5vdCB2YWxpZCBFWElGIGRhdGEhIFwiICsgZ2V0U3RyaW5nRnJvbURCKGZpbGUsIHN0YXJ0LCA0KSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYmlnRW5kLFxuICAgICAgICAgICAgdGFncywgdGFnLFxuICAgICAgICAgICAgZXhpZkRhdGEsIGdwc0RhdGEsXG4gICAgICAgICAgICB0aWZmT2Zmc2V0ID0gc3RhcnQgKyA2O1xuXG4gICAgICAgIC8vIHRlc3QgZm9yIFRJRkYgdmFsaWRpdHkgYW5kIGVuZGlhbm5lc3NcbiAgICAgICAgaWYgKGZpbGUuZ2V0VWludDE2KHRpZmZPZmZzZXQpID09IDB4NDk0OSkge1xuICAgICAgICAgICAgYmlnRW5kID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5nZXRVaW50MTYodGlmZk9mZnNldCkgPT0gMHg0RDREKSB7XG4gICAgICAgICAgICBiaWdFbmQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIk5vdCB2YWxpZCBUSUZGIGRhdGEhIChubyAweDQ5NDkgb3IgMHg0RDREKVwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWxlLmdldFVpbnQxNih0aWZmT2Zmc2V0KzIsICFiaWdFbmQpICE9IDB4MDAyQSkge1xuICAgICAgICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIk5vdCB2YWxpZCBUSUZGIGRhdGEhIChubyAweDAwMkEpXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZpcnN0SUZET2Zmc2V0ID0gZmlsZS5nZXRVaW50MzIodGlmZk9mZnNldCs0LCAhYmlnRW5kKTtcblxuICAgICAgICBpZiAoZmlyc3RJRkRPZmZzZXQgPCAweDAwMDAwMDA4KSB7XG4gICAgICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiTm90IHZhbGlkIFRJRkYgZGF0YSEgKEZpcnN0IG9mZnNldCBsZXNzIHRoYW4gOClcIiwgZmlsZS5nZXRVaW50MzIodGlmZk9mZnNldCs0LCAhYmlnRW5kKSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0YWdzID0gcmVhZFRhZ3MoZmlsZSwgdGlmZk9mZnNldCwgdGlmZk9mZnNldCArIGZpcnN0SUZET2Zmc2V0LCBUaWZmVGFncywgYmlnRW5kKTtcblxuICAgICAgICBpZiAodGFncy5FeGlmSUZEUG9pbnRlcikge1xuICAgICAgICAgICAgZXhpZkRhdGEgPSByZWFkVGFncyhmaWxlLCB0aWZmT2Zmc2V0LCB0aWZmT2Zmc2V0ICsgdGFncy5FeGlmSUZEUG9pbnRlciwgRXhpZlRhZ3MsIGJpZ0VuZCk7XG4gICAgICAgICAgICBmb3IgKHRhZyBpbiBleGlmRGF0YSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJMaWdodFNvdXJjZVwiIDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkZsYXNoXCIgOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTWV0ZXJpbmdNb2RlXCIgOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRXhwb3N1cmVQcm9ncmFtXCIgOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU2Vuc2luZ01ldGhvZFwiIDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlNjZW5lQ2FwdHVyZVR5cGVcIiA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJTY2VuZVR5cGVcIiA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDdXN0b21SZW5kZXJlZFwiIDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIldoaXRlQmFsYW5jZVwiIDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkdhaW5Db250cm9sXCIgOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ29udHJhc3RcIiA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJTYXR1cmF0aW9uXCIgOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU2hhcnBuZXNzXCIgOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU3ViamVjdERpc3RhbmNlUmFuZ2VcIiA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJGaWxlU291cmNlXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpZkRhdGFbdGFnXSA9IFN0cmluZ1ZhbHVlc1t0YWddW2V4aWZEYXRhW3RhZ11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkV4aWZWZXJzaW9uXCIgOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRmxhc2hwaXhWZXJzaW9uXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpZkRhdGFbdGFnXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXhpZkRhdGFbdGFnXVswXSwgZXhpZkRhdGFbdGFnXVsxXSwgZXhpZkRhdGFbdGFnXVsyXSwgZXhpZkRhdGFbdGFnXVszXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ29tcG9uZW50c0NvbmZpZ3VyYXRpb25cIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlmRGF0YVt0YWddID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmdWYWx1ZXMuQ29tcG9uZW50c1tleGlmRGF0YVt0YWddWzBdXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nVmFsdWVzLkNvbXBvbmVudHNbZXhpZkRhdGFbdGFnXVsxXV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZ1ZhbHVlcy5Db21wb25lbnRzW2V4aWZEYXRhW3RhZ11bMl1dICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmdWYWx1ZXMuQ29tcG9uZW50c1tleGlmRGF0YVt0YWddWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YWdzW3RhZ10gPSBleGlmRGF0YVt0YWddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhZ3MuR1BTSW5mb0lGRFBvaW50ZXIpIHtcbiAgICAgICAgICAgIGdwc0RhdGEgPSByZWFkVGFncyhmaWxlLCB0aWZmT2Zmc2V0LCB0aWZmT2Zmc2V0ICsgdGFncy5HUFNJbmZvSUZEUG9pbnRlciwgR1BTVGFncywgYmlnRW5kKTtcbiAgICAgICAgICAgIGZvciAodGFnIGluIGdwc0RhdGEpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRhZykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiR1BTVmVyc2lvbklEXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3BzRGF0YVt0YWddID0gZ3BzRGF0YVt0YWddWzBdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi5cIiArIGdwc0RhdGFbdGFnXVsxXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuXCIgKyBncHNEYXRhW3RhZ11bMl0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLlwiICsgZ3BzRGF0YVt0YWddWzNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhZ3NbdGFnXSA9IGdwc0RhdGFbdGFnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGV4dHJhY3QgdGh1bWJuYWlsXG4gICAgICAgIHRhZ3NbJ3RodW1ibmFpbCddID0gcmVhZFRodW1ibmFpbEltYWdlKGZpbGUsIHRpZmZPZmZzZXQsIGZpcnN0SUZET2Zmc2V0LCBiaWdFbmQpO1xuXG4gICAgICAgIHJldHVybiB0YWdzO1xuICAgIH1cblxuICAgZnVuY3Rpb24gZmluZFhNUGluSlBFRyhmaWxlKSB7XG5cbiAgICAgICAgaWYgKCEoJ0RPTVBhcnNlcicgaW4gc2VsZikpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignWE1MIHBhcnNpbmcgbm90IHN1cHBvcnRlZCB3aXRob3V0IERPTVBhcnNlcicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhmaWxlKTtcblxuICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiR290IGZpbGUgb2YgbGVuZ3RoIFwiICsgZmlsZS5ieXRlTGVuZ3RoKTtcbiAgICAgICAgaWYgKChkYXRhVmlldy5nZXRVaW50OCgwKSAhPSAweEZGKSB8fCAoZGF0YVZpZXcuZ2V0VWludDgoMSkgIT0gMHhEOCkpIHtcbiAgICAgICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIk5vdCBhIHZhbGlkIEpQRUdcIik7XG4gICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm90IGEgdmFsaWQganBlZ1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IDIsXG4gICAgICAgICAgICBsZW5ndGggPSBmaWxlLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICBkb20gPSBuZXcgRE9NUGFyc2VyKCk7XG5cbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IChsZW5ndGgtNCkpIHtcbiAgICAgICAgICAgIGlmIChnZXRTdHJpbmdGcm9tREIoZGF0YVZpZXcsIG9mZnNldCwgNCkgPT0gXCJodHRwXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRPZmZzZXQgPSBvZmZzZXQgLSAxO1xuICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uTGVuZ3RoID0gZGF0YVZpZXcuZ2V0VWludDE2KG9mZnNldCAtIDIpIC0gMTtcbiAgICAgICAgICAgICAgICB2YXIgeG1wU3RyaW5nID0gZ2V0U3RyaW5nRnJvbURCKGRhdGFWaWV3LCBzdGFydE9mZnNldCwgc2VjdGlvbkxlbmd0aClcbiAgICAgICAgICAgICAgICB2YXIgeG1wRW5kSW5kZXggPSB4bXBTdHJpbmcuaW5kZXhPZigneG1wbWV0YT4nKSArIDg7XG4gICAgICAgICAgICAgICAgeG1wU3RyaW5nID0geG1wU3RyaW5nLnN1YnN0cmluZyggeG1wU3RyaW5nLmluZGV4T2YoICc8eDp4bXBtZXRhJyApLCB4bXBFbmRJbmRleCApO1xuXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4T2ZYbXAgPSB4bXBTdHJpbmcuaW5kZXhPZigneDp4bXBtZXRhJykgKyAxMFxuICAgICAgICAgICAgICAgIC8vTWFueSBjdXN0b20gd3JpdHRlbiBwcm9ncmFtcyBlbWJlZCB4bXAveG1sIHdpdGhvdXQgYW55IG5hbWVzcGFjZS4gRm9sbG93aW5nIGFyZSBzb21lIG9mIHRoZW0uXG4gICAgICAgICAgICAgICAgLy9XaXRob3V0IHRoZXNlIG5hbWVzcGFjZXMsIFhNTCBpcyB0aG91Z2h0IHRvIGJlIGludmFsaWQgYnkgcGFyc2Vyc1xuICAgICAgICAgICAgICAgIHhtcFN0cmluZyA9IHhtcFN0cmluZy5zbGljZSgwLCBpbmRleE9mWG1wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJ3htbG5zOklwdGM0eG1wQ29yZT1cImh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy9cIiAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAneG1sbnM6eHNpPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcIiAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAneG1sbnM6dGlmZj1cImh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvXCIgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJ3htbG5zOnBsdXM9XCJodHRwOi8vc2NoZW1hcy5hbmRyb2lkLmNvbS9hcGsvbGliL2NvbS5nb29nbGUuYW5kcm9pZC5nbXMucGx1c1wiICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICd4bWxuczpleHQ9XCJodHRwOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS94c2x0RXh0ZW5zaW9uLzEuMFwiICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICd4bWxuczpleGlmPVwiaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC9cIiAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAneG1sbnM6c3RFdnQ9XCJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCNcIiAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAneG1sbnM6c3RSZWY9XCJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjXCIgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJ3htbG5zOmNycz1cImh0dHA6Ly9ucy5hZG9iZS5jb20vY2FtZXJhLXJhdy1zZXR0aW5ncy8xLjAvXCIgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJ3htbG5zOnhhcEdJbWc9XCJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvZy9pbWcvXCIgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJ3htbG5zOklwdGM0eG1wRXh0PVwiaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5L1wiICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHhtcFN0cmluZy5zbGljZShpbmRleE9mWG1wKVxuXG4gICAgICAgICAgICAgICAgdmFyIGRvbURvY3VtZW50ID0gZG9tLnBhcnNlRnJvbVN0cmluZyggeG1wU3RyaW5nLCAndGV4dC94bWwnICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHhtbDJPYmplY3QoZG9tRG9jdW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgIG9mZnNldCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24geG1sMmpzb24oeG1sKSB7XG4gICAgICAgIHZhciBqc29uID0ge307XG4gICAgICBcbiAgICAgICAgaWYgKHhtbC5ub2RlVHlwZSA9PSAxKSB7IC8vIGVsZW1lbnQgbm9kZVxuICAgICAgICAgIGlmICh4bWwuYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBqc29uWydAYXR0cmlidXRlcyddID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHhtbC5hdHRyaWJ1dGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGUgPSB4bWwuYXR0cmlidXRlcy5pdGVtKGopO1xuICAgICAgICAgICAgICBqc29uWydAYXR0cmlidXRlcyddW2F0dHJpYnV0ZS5ub2RlTmFtZV0gPSBhdHRyaWJ1dGUubm9kZVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh4bWwubm9kZVR5cGUgPT0gMykgeyAvLyB0ZXh0IG5vZGVcbiAgICAgICAgICByZXR1cm4geG1sLm5vZGVWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIGRlYWwgd2l0aCBjaGlsZHJlblxuICAgICAgICBpZiAoeG1sLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB4bWwuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0geG1sLmNoaWxkTm9kZXMuaXRlbShpKTtcbiAgICAgICAgICAgIHZhciBub2RlTmFtZSA9IGNoaWxkLm5vZGVOYW1lO1xuICAgICAgICAgICAgaWYgKGpzb25bbm9kZU5hbWVdID09IG51bGwpIHtcbiAgICAgICAgICAgICAganNvbltub2RlTmFtZV0gPSB4bWwyanNvbihjaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoanNvbltub2RlTmFtZV0ucHVzaCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9sZCA9IGpzb25bbm9kZU5hbWVdO1xuICAgICAgICAgICAgICAgIGpzb25bbm9kZU5hbWVdID0gW107XG4gICAgICAgICAgICAgICAganNvbltub2RlTmFtZV0ucHVzaChvbGQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGpzb25bbm9kZU5hbWVdLnB1c2goeG1sMmpzb24oY2hpbGQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHhtbDJPYmplY3QoeG1sKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgICAgICBpZiAoeG1sLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4bWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHhtbC5jaGlsZHJlbi5pdGVtKGkpO1xuICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVzID0gaXRlbS5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaWR4IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1BdHQgPSBhdHRyaWJ1dGVzW2lkeF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhS2V5ID0gaXRlbUF0dC5ub2RlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGl0ZW1BdHQubm9kZVZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGFLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2RhdGFLZXldID0gZGF0YVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBub2RlTmFtZSA9IGl0ZW0ubm9kZU5hbWU7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvYmpbbm9kZU5hbWVdKSA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICBvYmpbbm9kZU5hbWVdID0geG1sMmpzb24oaXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9ialtub2RlTmFtZV0ucHVzaCkgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkID0gb2JqW25vZGVOYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICBvYmpbbm9kZU5hbWVdID0gW107XG4gICAgICAgICAgICAgICAgICAgIG9ialtub2RlTmFtZV0ucHVzaChvbGQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb2JqW25vZGVOYW1lXS5wdXNoKHhtbDJqc29uKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9iaiA9IHhtbC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBFWElGLmVuYWJsZVhtcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBFWElGLmlzWG1wRW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgRVhJRi5kaXNhYmxlWG1wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIEVYSUYuaXNYbXBFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgRVhJRi5nZXREYXRhID0gZnVuY3Rpb24oaW1nLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoKChzZWxmLkltYWdlICYmIGltZyBpbnN0YW5jZW9mIHNlbGYuSW1hZ2UpXG4gICAgICAgICAgICB8fCAoc2VsZi5IVE1MSW1hZ2VFbGVtZW50ICYmIGltZyBpbnN0YW5jZW9mIHNlbGYuSFRNTEltYWdlRWxlbWVudCkpXG4gICAgICAgICAgICAmJiAhaW1nLmNvbXBsZXRlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmICghaW1hZ2VIYXNEYXRhKGltZykpIHtcbiAgICAgICAgICAgIGdldEltYWdlRGF0YShpbWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoaW1nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBFWElGLmdldFRhZyA9IGZ1bmN0aW9uKGltZywgdGFnKSB7XG4gICAgICAgIGlmICghaW1hZ2VIYXNEYXRhKGltZykpIHJldHVybjtcbiAgICAgICAgcmV0dXJuIGltZy5leGlmZGF0YVt0YWddO1xuICAgIH1cbiAgICBcbiAgICBFWElGLmdldElwdGNUYWcgPSBmdW5jdGlvbihpbWcsIHRhZykge1xuICAgICAgICBpZiAoIWltYWdlSGFzRGF0YShpbWcpKSByZXR1cm47XG4gICAgICAgIHJldHVybiBpbWcuaXB0Y2RhdGFbdGFnXTtcbiAgICB9XG5cbiAgICBFWElGLmdldEFsbFRhZ3MgPSBmdW5jdGlvbihpbWcpIHtcbiAgICAgICAgaWYgKCFpbWFnZUhhc0RhdGEoaW1nKSkgcmV0dXJuIHt9O1xuICAgICAgICB2YXIgYSxcbiAgICAgICAgICAgIGRhdGEgPSBpbWcuZXhpZmRhdGEsXG4gICAgICAgICAgICB0YWdzID0ge307XG4gICAgICAgIGZvciAoYSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShhKSkge1xuICAgICAgICAgICAgICAgIHRhZ3NbYV0gPSBkYXRhW2FdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWdzO1xuICAgIH1cbiAgICBcbiAgICBFWElGLmdldEFsbElwdGNUYWdzID0gZnVuY3Rpb24oaW1nKSB7XG4gICAgICAgIGlmICghaW1hZ2VIYXNEYXRhKGltZykpIHJldHVybiB7fTtcbiAgICAgICAgdmFyIGEsXG4gICAgICAgICAgICBkYXRhID0gaW1nLmlwdGNkYXRhLFxuICAgICAgICAgICAgdGFncyA9IHt9O1xuICAgICAgICBmb3IgKGEgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoYSkpIHtcbiAgICAgICAgICAgICAgICB0YWdzW2FdID0gZGF0YVthXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFncztcbiAgICB9XG5cbiAgICBFWElGLnByZXR0eSA9IGZ1bmN0aW9uKGltZykge1xuICAgICAgICBpZiAoIWltYWdlSGFzRGF0YShpbWcpKSByZXR1cm4gXCJcIjtcbiAgICAgICAgdmFyIGEsXG4gICAgICAgICAgICBkYXRhID0gaW1nLmV4aWZkYXRhLFxuICAgICAgICAgICAgc3RyUHJldHR5ID0gXCJcIjtcbiAgICAgICAgZm9yIChhIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2FdID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbYV0gaW5zdGFuY2VvZiBOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0clByZXR0eSArPSBhICsgXCIgOiBcIiArIGRhdGFbYV0gKyBcIiBbXCIgKyBkYXRhW2FdLm51bWVyYXRvciArIFwiL1wiICsgZGF0YVthXS5kZW5vbWluYXRvciArIFwiXVxcclxcblwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyUHJldHR5ICs9IGEgKyBcIiA6IFtcIiArIGRhdGFbYV0ubGVuZ3RoICsgXCIgdmFsdWVzXVxcclxcblwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyUHJldHR5ICs9IGEgKyBcIiA6IFwiICsgZGF0YVthXSArIFwiXFxyXFxuXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJQcmV0dHk7XG4gICAgfVxuXG4gICAgRVhJRi5yZWFkRnJvbUJpbmFyeUZpbGUgPSBmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgIHJldHVybiBmaW5kRVhJRmluSlBFRyhmaWxlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZSgnZXhpZi1qcycsIFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBFWElGO1xuICAgICAgICB9KTtcbiAgICB9XG59LmNhbGwodGhpcykpO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGdldEltYWdlc18xID0gcmVxdWlyZShcIi4vdXRpbHMvZ2V0SW1hZ2VzXCIpO1xuY29uc3Qgb3B0aW9uc18xID0gcmVxdWlyZShcIi4vb3B0aW9uc1wiKTtcbmNvbnN0IGdldEJyb3dzZXJPcmllbnRhdGlvbl8xID0gcmVxdWlyZShcIi4vdXRpbHMvZ2V0QnJvd3Nlck9yaWVudGF0aW9uXCIpO1xuZXhwb3J0cy5nZXRCYXNlNjRTdHJpbmdzID0gYXN5bmMgKGZpbGVzLCB7IG1heFNpemUgPSBvcHRpb25zXzEuZGVmYXVsdE9wdGlvbnMubWF4U2l6ZSB9ID0ge30pID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2FudmFzIGNhbiBub3QgY3JlYXRlZCcpO1xuICAgIH1cbiAgICBjb25zdCBpbWFnZXMgPSBhd2FpdCBnZXRJbWFnZXNfMS5nZXRJbWFnZXMoZmlsZXMpO1xuICAgIGNvbnN0IGhhc0Jyb3dzZXJPcmllbnRhdGlvbiA9IGF3YWl0IGdldEJyb3dzZXJPcmllbnRhdGlvbl8xLmdldEJyb3dzZXJPcmllbnRhdGlvbigpO1xuICAgIGlmIChoYXNCcm93c2VyT3JpZW50YXRpb24pIHtcbiAgICAgICAgY29uc3QgYmFzZTY0cyA9IGltYWdlcy5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGdldEltYWdlc18xLmdldFNpemUoaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCwgbWF4U2l6ZSk7XG4gICAgICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke3dpZHRofXB4YCk7XG4gICAgICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBgJHtoZWlnaHR9cHhgKTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIHJldHVybiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYmFzZTY0cztcbiAgICB9XG4gICAgY29uc3QgYmFzZTY0cyA9IGltYWdlcy5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gZ2V0SW1hZ2VzXzEuZ2V0T3JpZW50YXRpb24oaW1hZ2UpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGdldEltYWdlc18xLmdldFNpemUob3JpZW50YXRpb24gPiA0ID8gaW1hZ2UuaGVpZ2h0IDogaW1hZ2Uud2lkdGgsIG9yaWVudGF0aW9uID4gNCA/IGltYWdlLndpZHRoIDogaW1hZ2UuaGVpZ2h0LCBtYXhTaXplKTtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHt3aWR0aH1weGApO1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBgJHtoZWlnaHR9cHhgKTtcbiAgICAgICAgY29uc3QgeyB0cmFuc2xhdGUsIHNjYWxlLCByb3RhdGUgfSA9IGdldEltYWdlc18xLmdldENhbnZhc09wdGlvbnMod2lkdGgsIGhlaWdodCwgb3JpZW50YXRpb24pO1xuICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSh0cmFuc2xhdGUueCwgdHJhbnNsYXRlLnkpO1xuICAgICAgICBjb250ZXh0LnNjYWxlKHNjYWxlLngsIHNjYWxlLnkpO1xuICAgICAgICBjb250ZXh0LnJvdGF0ZShyb3RhdGUuYW5nbGUpO1xuICAgICAgICAvLyBleGlmIG9yaWVudGF0aW9uIHZhbHVlcyA+IDQgY29ycmVzcG9uZCB0byBwb3J0cmFpdCBvcmllbnRhdGlvbi5cbiAgICAgICAgLy8gd2lkdGggYW5kIGhlaWdodCBwYXJhbWV0ZXJzIG11c3QgYmUgc3dhcHBlZCBmb3IgbGFuZHNjYXBlIHRvIGVuc3VyZSBjb3JyZWN0IGltYWdlIGRpc3BsYXlcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID4gNCkge1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJhc2U2NHM7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIi4vZ2V0QmFzZTY0U3RyaW5nc1wiKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbWF4U2l6ZTogNzIwLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gVGhhbmtzIEphdmFTY3JpcHQtTG9hZC1JbWFnZSByZXBvXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LUxvYWQtSW1hZ2UvYmxvYi8xZTRkZjcwNzgyMWEwYWZjYzExZWEwNzIwZWU0MDNiODc1OWYzODgxL2pzL2xvYWQtaW1hZ2Utb3JpZW50YXRpb24uanMjTDM3LUw1M1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhZEltYWdlXzEgPSByZXF1aXJlKFwiLi9yZWFkSW1hZ2VcIik7XG5hc3luYyBmdW5jdGlvbiBnZXRCcm93c2VyT3JpZW50YXRpb24oKSB7XG4gICAgLy8gYmxhY2sgMngxIEpQRUcsIHdpdGggdGhlIGZvbGxvd2luZyBtZXRhIGluZm9ybWF0aW9uIHNldDpcbiAgICAvLyBFWElGIE9yaWVudGF0aW9uOiA2IChSb3RhdGVkIDkwwrAgQ0NXKVxuICAgIGNvbnN0IHRlc3RJbWFnZVVSTCA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80UUFpUlhocFpnQUFUVTBBS2dBQUFBZ0FBUUVTQUFNQUFBQUJBQVlBQUFBJyArXG4gICAgICAgICdBQUFELzJ3Q0VBQUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBJyArXG4gICAgICAgICdRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFJyArXG4gICAgICAgICdCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFmL0FBQkVJQUFFQUFnTUJFUUFDRVFFREVRSC94JyArXG4gICAgICAgICdBQktBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUxFQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUUVBQUFBQUFBQUFBQUFBQUFBJyArXG4gICAgICAgICdBQUFBQUVRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85b0FEQU1CQUFJUkF4RUFQd0EvOEgvLzJRPT0nO1xuICAgIGNvbnN0IGltZyA9IGF3YWl0IHJlYWRJbWFnZV8xLnJlYWRJbWFnZSh0ZXN0SW1hZ2VVUkwpO1xuICAgIC8vIENoZWNrIGlmIGJyb3dzZXIgc3VwcG9ydHMgYXV0b21hdGljIGltYWdlIG9yaWVudGF0aW9uOlxuICAgIHJldHVybiBpbWcud2lkdGggPT09IDEgJiYgaW1nLmhlaWdodCA9PT0gMjtcbn1cbmV4cG9ydHMuZ2V0QnJvd3Nlck9yaWVudGF0aW9uID0gZ2V0QnJvd3Nlck9yaWVudGF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBFWElGID0gcmVxdWlyZShcImV4aWYtanNcIik7XG5jb25zdCByZWFkRmlsZV8xID0gcmVxdWlyZShcIi4vcmVhZEZpbGVcIik7XG5jb25zdCByZWFkSW1hZ2VfMSA9IHJlcXVpcmUoXCIuL3JlYWRJbWFnZVwiKTtcbmNvbnN0IG9wdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi9vcHRpb25zXCIpO1xuYXN5bmMgZnVuY3Rpb24gZ2V0SW1hZ2VzKGZpbGVzKSB7XG4gICAgY29uc3QgZGF0YXMgPSBhd2FpdCByZWFkRmlsZV8xLmdldERhdGFGcm9tUmVhZEZpbGUoZmlsZXMpO1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChkYXRhcy5tYXAoKGl0ZW0pID0+IHJlYWRJbWFnZV8xLnJlYWRJbWFnZShpdGVtKSkpO1xufVxuZXhwb3J0cy5nZXRJbWFnZXMgPSBnZXRJbWFnZXM7XG5mdW5jdGlvbiBnZXRTaXplKHdpZHRoLCBoZWlnaHQsIG1heFNpemUgPSBvcHRpb25zXzEuZGVmYXVsdE9wdGlvbnMubWF4U2l6ZSkge1xuICAgIGNvbnN0IHBhcnNlV2lkdGggPSBtYXhTaXplIDwgd2lkdGggPyBtYXhTaXplIDogd2lkdGg7XG4gICAgY29uc3QgcGFyc2VIZWlnaHQgPSBtYXhTaXplIDwgaGVpZ2h0ID8gbWF4U2l6ZSA6IGhlaWdodDtcbiAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiBwYXJzZVdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAocGFyc2VXaWR0aCAvIHdpZHRoKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGhlaWdodCA+IHdpZHRoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogd2lkdGggKiAocGFyc2VIZWlnaHQgLyBoZWlnaHQpLFxuICAgICAgICAgICAgaGVpZ2h0OiBwYXJzZUhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHBhcnNlV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGFyc2VIZWlnaHQsXG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0U2l6ZSA9IGdldFNpemU7XG5mdW5jdGlvbiBnZXRPcmllbnRhdGlvbihpbWcpIHtcbiAgICBsZXQgb3JpZW50YXRpb24gPSAxO1xuICAgIC8vIEB0cy1pZ25vcmUgbm90IHN0cmluZzogaHR0cHM6Ly9naXRodWIuY29tL2V4aWYtanMvZXhpZi1qcy9wdWxsLzE5OFxuICAgIEVYSUYuZ2V0RGF0YShpbWcsICgpID0+IHtcbiAgICAgICAgb3JpZW50YXRpb24gPSBFWElGLmdldFRhZyhpbWcsICdPcmllbnRhdGlvbicpO1xuICAgIH0pO1xuICAgIHJldHVybiBvcmllbnRhdGlvbjtcbn1cbmV4cG9ydHMuZ2V0T3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbjtcbmZ1bmN0aW9uIGdldENhbnZhc09wdGlvbnMod2lkdGgsIGhlaWdodCwgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICB9LFxuICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIHJvdGF0ZToge1xuICAgICAgICAgICAgYW5nbGU6IDAsXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBzd2l0Y2ggKG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIC8vIGhvcml6b250YWwgZmxpcFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLnRyYW5zbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgeDogd2lkdGgsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLnNjYWxlLFxuICAgICAgICAgICAgICAgICAgICB4OiAtMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgLy8gMTgwwrAgcm90YXRlIGxlZnRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGhlaWdodCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJvdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBhbmdsZTogTWF0aC5QSSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgLy8gdmVydGljYWwgZmxpcFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLnRyYW5zbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgeTogaGVpZ2h0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgeTogLTEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIC8vIHZlcnRpY2FsIGZsaXAgKyA5MCByb3RhdGUgcmlnaHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLnNjYWxlLFxuICAgICAgICAgICAgICAgICAgICB4OiAtMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJvdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBhbmdsZTogKDkwICogTWF0aC5QSSkgLyAxODAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIC8vIDkwwrAgcm90YXRlIHJpZ2h0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMudHJhbnNsYXRlLFxuICAgICAgICAgICAgICAgICAgICB4OiB3aWR0aCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJvdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBhbmdsZTogKDkwICogTWF0aC5QSSkgLyAxODAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIC8vIGhvcml6b250YWwgZmxpcCArIDkwIHJvdGF0ZSByaWdodFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICB4OiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogaGVpZ2h0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcm90YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiAoOTAgKiBNYXRoLlBJKSAvIDE4MCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIHk6IC0xLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAvLyA5MMKwIHJvdGF0ZSBsZWZ0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMudHJhbnNsYXRlLFxuICAgICAgICAgICAgICAgICAgICB5OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByb3RhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6IC0oOTAgKiBNYXRoLlBJKSAvIDE4MCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0Q2FudmFzT3B0aW9ucyA9IGdldENhbnZhc09wdGlvbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHJlYWRGaWxlKGZpbGUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHJlc29sdmUoZS50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoZXJyb3IpID0+IHJlamVjdChlcnJvcik7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5yZWFkRmlsZSA9IHJlYWRGaWxlO1xuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YUZyb21SZWFkRmlsZShmaWxlcykge1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChBcnJheS5mcm9tKGZpbGVzKS5tYXAoKGZpbGUpID0+IHJlYWRGaWxlKGZpbGUpKSk7XG59XG5leHBvcnRzLmdldERhdGFGcm9tUmVhZEZpbGUgPSBnZXREYXRhRnJvbVJlYWRGaWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiByZWFkSW1hZ2Uoc3JjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICAgICAgaW1nLm9uZXJyb3IgPSAoZXJyb3IpID0+IHJlamVjdChlcnJvcik7XG4gICAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgfSk7XG59XG5leHBvcnRzLnJlYWRJbWFnZSA9IHJlYWRJbWFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=