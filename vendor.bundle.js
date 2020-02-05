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
exports.getBase64Strings = async (files, { maxSize = options_1.defaultOptions.maxSize } = {}) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error('canvas can not created');
    }
    const images = await getImages_1.getImages(files);
    const base64s = images.map(image => {
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
    return await Promise.all(datas.map(item => readImage_1.readImage(item)));
}
exports.getImages = getImages;
function getSize(width, height, maxSize = options_1.defaultOptions.maxSize) {
    if (width > height) {
        return {
            width: maxSize,
            height: height * (maxSize / width),
        };
    }
    if (height > width) {
        return {
            width: width * (maxSize / height),
            height: maxSize,
        };
    }
    return {
        width: maxSize,
        height: maxSize,
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
        reader.onerror = error => reject(error);
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
        img.onerror = error => reject(error);
        img.src = src;
    });
}
exports.readImage = readImage;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhpZi1qcy9leGlmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leGlmLXJvdGF0ZS1qcy9saWIvZ2V0QmFzZTY0U3RyaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhpZi1yb3RhdGUtanMvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leGlmLXJvdGF0ZS1qcy9saWIvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhpZi1yb3RhdGUtanMvbGliL3V0aWxzL2dldEltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhpZi1yb3RhdGUtanMvbGliL3V0aWxzL3JlYWRGaWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leGlmLXJvdGF0ZS1qcy9saWIvdXRpbHMvcmVhZEltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxJQUE4QjtBQUN0QyxZQUFZLEtBQTZCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEtBQUssTUFBTSxFQUVOOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEphO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJmaWxlIjoidmVuZG9yLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcblxuICAgIHZhciBkZWJ1ZyA9IGZhbHNlO1xuXG4gICAgdmFyIHJvb3QgPSB0aGlzO1xuXG4gICAgdmFyIEVYSUYgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEVYSUYpIHJldHVybiBvYmo7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBFWElGKSkgcmV0dXJuIG5ldyBFWElGKG9iaik7XG4gICAgICAgIHRoaXMuRVhJRndyYXBwZWQgPSBvYmo7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBFWElGO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydHMuRVhJRiA9IEVYSUY7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5FWElGID0gRVhJRjtcbiAgICB9XG5cbiAgICB2YXIgRXhpZlRhZ3MgPSBFWElGLlRhZ3MgPSB7XG5cbiAgICAgICAgLy8gdmVyc2lvbiB0YWdzXG4gICAgICAgIDB4OTAwMCA6IFwiRXhpZlZlcnNpb25cIiwgICAgICAgICAgICAgLy8gRVhJRiB2ZXJzaW9uXG4gICAgICAgIDB4QTAwMCA6IFwiRmxhc2hwaXhWZXJzaW9uXCIsICAgICAgICAgLy8gRmxhc2hwaXggZm9ybWF0IHZlcnNpb25cblxuICAgICAgICAvLyBjb2xvcnNwYWNlIHRhZ3NcbiAgICAgICAgMHhBMDAxIDogXCJDb2xvclNwYWNlXCIsICAgICAgICAgICAgICAvLyBDb2xvciBzcGFjZSBpbmZvcm1hdGlvbiB0YWdcblxuICAgICAgICAvLyBpbWFnZSBjb25maWd1cmF0aW9uXG4gICAgICAgIDB4QTAwMiA6IFwiUGl4ZWxYRGltZW5zaW9uXCIsICAgICAgICAgLy8gVmFsaWQgd2lkdGggb2YgbWVhbmluZ2Z1bCBpbWFnZVxuICAgICAgICAweEEwMDMgOiBcIlBpeGVsWURpbWVuc2lvblwiLCAgICAgICAgIC8vIFZhbGlkIGhlaWdodCBvZiBtZWFuaW5nZnVsIGltYWdlXG4gICAgICAgIDB4OTEwMSA6IFwiQ29tcG9uZW50c0NvbmZpZ3VyYXRpb25cIiwgLy8gSW5mb3JtYXRpb24gYWJvdXQgY2hhbm5lbHNcbiAgICAgICAgMHg5MTAyIDogXCJDb21wcmVzc2VkQml0c1BlclBpeGVsXCIsICAvLyBDb21wcmVzc2VkIGJpdHMgcGVyIHBpeGVsXG5cbiAgICAgICAgLy8gdXNlciBpbmZvcm1hdGlvblxuICAgICAgICAweDkyN0MgOiBcIk1ha2VyTm90ZVwiLCAgICAgICAgICAgICAgIC8vIEFueSBkZXNpcmVkIGluZm9ybWF0aW9uIHdyaXR0ZW4gYnkgdGhlIG1hbnVmYWN0dXJlclxuICAgICAgICAweDkyODYgOiBcIlVzZXJDb21tZW50XCIsICAgICAgICAgICAgIC8vIENvbW1lbnRzIGJ5IHVzZXJcblxuICAgICAgICAvLyByZWxhdGVkIGZpbGVcbiAgICAgICAgMHhBMDA0IDogXCJSZWxhdGVkU291bmRGaWxlXCIsICAgICAgICAvLyBOYW1lIG9mIHJlbGF0ZWQgc291bmQgZmlsZVxuXG4gICAgICAgIC8vIGRhdGUgYW5kIHRpbWVcbiAgICAgICAgMHg5MDAzIDogXCJEYXRlVGltZU9yaWdpbmFsXCIsICAgICAgICAvLyBEYXRlIGFuZCB0aW1lIHdoZW4gdGhlIG9yaWdpbmFsIGltYWdlIHdhcyBnZW5lcmF0ZWRcbiAgICAgICAgMHg5MDA0IDogXCJEYXRlVGltZURpZ2l0aXplZFwiLCAgICAgICAvLyBEYXRlIGFuZCB0aW1lIHdoZW4gdGhlIGltYWdlIHdhcyBzdG9yZWQgZGlnaXRhbGx5XG4gICAgICAgIDB4OTI5MCA6IFwiU3Vic2VjVGltZVwiLCAgICAgICAgICAgICAgLy8gRnJhY3Rpb25zIG9mIHNlY29uZHMgZm9yIERhdGVUaW1lXG4gICAgICAgIDB4OTI5MSA6IFwiU3Vic2VjVGltZU9yaWdpbmFsXCIsICAgICAgLy8gRnJhY3Rpb25zIG9mIHNlY29uZHMgZm9yIERhdGVUaW1lT3JpZ2luYWxcbiAgICAgICAgMHg5MjkyIDogXCJTdWJzZWNUaW1lRGlnaXRpemVkXCIsICAgICAvLyBGcmFjdGlvbnMgb2Ygc2Vjb25kcyBmb3IgRGF0ZVRpbWVEaWdpdGl6ZWRcblxuICAgICAgICAvLyBwaWN0dXJlLXRha2luZyBjb25kaXRpb25zXG4gICAgICAgIDB4ODI5QSA6IFwiRXhwb3N1cmVUaW1lXCIsICAgICAgICAgICAgLy8gRXhwb3N1cmUgdGltZSAoaW4gc2Vjb25kcylcbiAgICAgICAgMHg4MjlEIDogXCJGTnVtYmVyXCIsICAgICAgICAgICAgICAgICAvLyBGIG51bWJlclxuICAgICAgICAweDg4MjIgOiBcIkV4cG9zdXJlUHJvZ3JhbVwiLCAgICAgICAgIC8vIEV4cG9zdXJlIHByb2dyYW1cbiAgICAgICAgMHg4ODI0IDogXCJTcGVjdHJhbFNlbnNpdGl2aXR5XCIsICAgICAvLyBTcGVjdHJhbCBzZW5zaXRpdml0eVxuICAgICAgICAweDg4MjcgOiBcIklTT1NwZWVkUmF0aW5nc1wiLCAgICAgICAgIC8vIElTTyBzcGVlZCByYXRpbmdcbiAgICAgICAgMHg4ODI4IDogXCJPRUNGXCIsICAgICAgICAgICAgICAgICAgICAvLyBPcHRvZWxlY3RyaWMgY29udmVyc2lvbiBmYWN0b3JcbiAgICAgICAgMHg5MjAxIDogXCJTaHV0dGVyU3BlZWRWYWx1ZVwiLCAgICAgICAvLyBTaHV0dGVyIHNwZWVkXG4gICAgICAgIDB4OTIwMiA6IFwiQXBlcnR1cmVWYWx1ZVwiLCAgICAgICAgICAgLy8gTGVucyBhcGVydHVyZVxuICAgICAgICAweDkyMDMgOiBcIkJyaWdodG5lc3NWYWx1ZVwiLCAgICAgICAgIC8vIFZhbHVlIG9mIGJyaWdodG5lc3NcbiAgICAgICAgMHg5MjA0IDogXCJFeHBvc3VyZUJpYXNcIiwgICAgICAgICAgICAvLyBFeHBvc3VyZSBiaWFzXG4gICAgICAgIDB4OTIwNSA6IFwiTWF4QXBlcnR1cmVWYWx1ZVwiLCAgICAgICAgLy8gU21hbGxlc3QgRiBudW1iZXIgb2YgbGVuc1xuICAgICAgICAweDkyMDYgOiBcIlN1YmplY3REaXN0YW5jZVwiLCAgICAgICAgIC8vIERpc3RhbmNlIHRvIHN1YmplY3QgaW4gbWV0ZXJzXG4gICAgICAgIDB4OTIwNyA6IFwiTWV0ZXJpbmdNb2RlXCIsICAgICAgICAgICAgLy8gTWV0ZXJpbmcgbW9kZVxuICAgICAgICAweDkyMDggOiBcIkxpZ2h0U291cmNlXCIsICAgICAgICAgICAgIC8vIEtpbmQgb2YgbGlnaHQgc291cmNlXG4gICAgICAgIDB4OTIwOSA6IFwiRmxhc2hcIiwgICAgICAgICAgICAgICAgICAgLy8gRmxhc2ggc3RhdHVzXG4gICAgICAgIDB4OTIxNCA6IFwiU3ViamVjdEFyZWFcIiwgICAgICAgICAgICAgLy8gTG9jYXRpb24gYW5kIGFyZWEgb2YgbWFpbiBzdWJqZWN0XG4gICAgICAgIDB4OTIwQSA6IFwiRm9jYWxMZW5ndGhcIiwgICAgICAgICAgICAgLy8gRm9jYWwgbGVuZ3RoIG9mIHRoZSBsZW5zIGluIG1tXG4gICAgICAgIDB4QTIwQiA6IFwiRmxhc2hFbmVyZ3lcIiwgICAgICAgICAgICAgLy8gU3Ryb2JlIGVuZXJneSBpbiBCQ1BTXG4gICAgICAgIDB4QTIwQyA6IFwiU3BhdGlhbEZyZXF1ZW5jeVJlc3BvbnNlXCIsICAgIC8vXG4gICAgICAgIDB4QTIwRSA6IFwiRm9jYWxQbGFuZVhSZXNvbHV0aW9uXCIsICAgLy8gTnVtYmVyIG9mIHBpeGVscyBpbiB3aWR0aCBkaXJlY3Rpb24gcGVyIEZvY2FsUGxhbmVSZXNvbHV0aW9uVW5pdFxuICAgICAgICAweEEyMEYgOiBcIkZvY2FsUGxhbmVZUmVzb2x1dGlvblwiLCAgIC8vIE51bWJlciBvZiBwaXhlbHMgaW4gaGVpZ2h0IGRpcmVjdGlvbiBwZXIgRm9jYWxQbGFuZVJlc29sdXRpb25Vbml0XG4gICAgICAgIDB4QTIxMCA6IFwiRm9jYWxQbGFuZVJlc29sdXRpb25Vbml0XCIsICAgIC8vIFVuaXQgZm9yIG1lYXN1cmluZyBGb2NhbFBsYW5lWFJlc29sdXRpb24gYW5kIEZvY2FsUGxhbmVZUmVzb2x1dGlvblxuICAgICAgICAweEEyMTQgOiBcIlN1YmplY3RMb2NhdGlvblwiLCAgICAgICAgIC8vIExvY2F0aW9uIG9mIHN1YmplY3QgaW4gaW1hZ2VcbiAgICAgICAgMHhBMjE1IDogXCJFeHBvc3VyZUluZGV4XCIsICAgICAgICAgICAvLyBFeHBvc3VyZSBpbmRleCBzZWxlY3RlZCBvbiBjYW1lcmFcbiAgICAgICAgMHhBMjE3IDogXCJTZW5zaW5nTWV0aG9kXCIsICAgICAgICAgICAvLyBJbWFnZSBzZW5zb3IgdHlwZVxuICAgICAgICAweEEzMDAgOiBcIkZpbGVTb3VyY2VcIiwgICAgICAgICAgICAgIC8vIEltYWdlIHNvdXJjZSAoMyA9PSBEU0MpXG4gICAgICAgIDB4QTMwMSA6IFwiU2NlbmVUeXBlXCIsICAgICAgICAgICAgICAgLy8gU2NlbmUgdHlwZSAoMSA9PSBkaXJlY3RseSBwaG90b2dyYXBoZWQpXG4gICAgICAgIDB4QTMwMiA6IFwiQ0ZBUGF0dGVyblwiLCAgICAgICAgICAgICAgLy8gQ29sb3IgZmlsdGVyIGFycmF5IGdlb21ldHJpYyBwYXR0ZXJuXG4gICAgICAgIDB4QTQwMSA6IFwiQ3VzdG9tUmVuZGVyZWRcIiwgICAgICAgICAgLy8gU3BlY2lhbCBwcm9jZXNzaW5nXG4gICAgICAgIDB4QTQwMiA6IFwiRXhwb3N1cmVNb2RlXCIsICAgICAgICAgICAgLy8gRXhwb3N1cmUgbW9kZVxuICAgICAgICAweEE0MDMgOiBcIldoaXRlQmFsYW5jZVwiLCAgICAgICAgICAgIC8vIDEgPSBhdXRvIHdoaXRlIGJhbGFuY2UsIDIgPSBtYW51YWxcbiAgICAgICAgMHhBNDA0IDogXCJEaWdpdGFsWm9vbVJhdGlvblwiLCAgICAgICAvLyBEaWdpdGFsIHpvb20gcmF0aW9cbiAgICAgICAgMHhBNDA1IDogXCJGb2NhbExlbmd0aEluMzVtbUZpbG1cIiwgICAvLyBFcXVpdmFsZW50IGZvYWNsIGxlbmd0aCBhc3N1bWluZyAzNW1tIGZpbG0gY2FtZXJhIChpbiBtbSlcbiAgICAgICAgMHhBNDA2IDogXCJTY2VuZUNhcHR1cmVUeXBlXCIsICAgICAgICAvLyBUeXBlIG9mIHNjZW5lXG4gICAgICAgIDB4QTQwNyA6IFwiR2FpbkNvbnRyb2xcIiwgICAgICAgICAgICAgLy8gRGVncmVlIG9mIG92ZXJhbGwgaW1hZ2UgZ2FpbiBhZGp1c3RtZW50XG4gICAgICAgIDB4QTQwOCA6IFwiQ29udHJhc3RcIiwgICAgICAgICAgICAgICAgLy8gRGlyZWN0aW9uIG9mIGNvbnRyYXN0IHByb2Nlc3NpbmcgYXBwbGllZCBieSBjYW1lcmFcbiAgICAgICAgMHhBNDA5IDogXCJTYXR1cmF0aW9uXCIsICAgICAgICAgICAgICAvLyBEaXJlY3Rpb24gb2Ygc2F0dXJhdGlvbiBwcm9jZXNzaW5nIGFwcGxpZWQgYnkgY2FtZXJhXG4gICAgICAgIDB4QTQwQSA6IFwiU2hhcnBuZXNzXCIsICAgICAgICAgICAgICAgLy8gRGlyZWN0aW9uIG9mIHNoYXJwbmVzcyBwcm9jZXNzaW5nIGFwcGxpZWQgYnkgY2FtZXJhXG4gICAgICAgIDB4QTQwQiA6IFwiRGV2aWNlU2V0dGluZ0Rlc2NyaXB0aW9uXCIsICAgIC8vXG4gICAgICAgIDB4QTQwQyA6IFwiU3ViamVjdERpc3RhbmNlUmFuZ2VcIiwgICAgLy8gRGlzdGFuY2UgdG8gc3ViamVjdFxuXG4gICAgICAgIC8vIG90aGVyIHRhZ3NcbiAgICAgICAgMHhBMDA1IDogXCJJbnRlcm9wZXJhYmlsaXR5SUZEUG9pbnRlclwiLFxuICAgICAgICAweEE0MjAgOiBcIkltYWdlVW5pcXVlSURcIiAgICAgICAgICAgIC8vIElkZW50aWZpZXIgYXNzaWduZWQgdW5pcXVlbHkgdG8gZWFjaCBpbWFnZVxuICAgIH07XG5cbiAgICB2YXIgVGlmZlRhZ3MgPSBFWElGLlRpZmZUYWdzID0ge1xuICAgICAgICAweDAxMDAgOiBcIkltYWdlV2lkdGhcIixcbiAgICAgICAgMHgwMTAxIDogXCJJbWFnZUhlaWdodFwiLFxuICAgICAgICAweDg3NjkgOiBcIkV4aWZJRkRQb2ludGVyXCIsXG4gICAgICAgIDB4ODgyNSA6IFwiR1BTSW5mb0lGRFBvaW50ZXJcIixcbiAgICAgICAgMHhBMDA1IDogXCJJbnRlcm9wZXJhYmlsaXR5SUZEUG9pbnRlclwiLFxuICAgICAgICAweDAxMDIgOiBcIkJpdHNQZXJTYW1wbGVcIixcbiAgICAgICAgMHgwMTAzIDogXCJDb21wcmVzc2lvblwiLFxuICAgICAgICAweDAxMDYgOiBcIlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25cIixcbiAgICAgICAgMHgwMTEyIDogXCJPcmllbnRhdGlvblwiLFxuICAgICAgICAweDAxMTUgOiBcIlNhbXBsZXNQZXJQaXhlbFwiLFxuICAgICAgICAweDAxMUMgOiBcIlBsYW5hckNvbmZpZ3VyYXRpb25cIixcbiAgICAgICAgMHgwMjEyIDogXCJZQ2JDclN1YlNhbXBsaW5nXCIsXG4gICAgICAgIDB4MDIxMyA6IFwiWUNiQ3JQb3NpdGlvbmluZ1wiLFxuICAgICAgICAweDAxMUEgOiBcIlhSZXNvbHV0aW9uXCIsXG4gICAgICAgIDB4MDExQiA6IFwiWVJlc29sdXRpb25cIixcbiAgICAgICAgMHgwMTI4IDogXCJSZXNvbHV0aW9uVW5pdFwiLFxuICAgICAgICAweDAxMTEgOiBcIlN0cmlwT2Zmc2V0c1wiLFxuICAgICAgICAweDAxMTYgOiBcIlJvd3NQZXJTdHJpcFwiLFxuICAgICAgICAweDAxMTcgOiBcIlN0cmlwQnl0ZUNvdW50c1wiLFxuICAgICAgICAweDAyMDEgOiBcIkpQRUdJbnRlcmNoYW5nZUZvcm1hdFwiLFxuICAgICAgICAweDAyMDIgOiBcIkpQRUdJbnRlcmNoYW5nZUZvcm1hdExlbmd0aFwiLFxuICAgICAgICAweDAxMkQgOiBcIlRyYW5zZmVyRnVuY3Rpb25cIixcbiAgICAgICAgMHgwMTNFIDogXCJXaGl0ZVBvaW50XCIsXG4gICAgICAgIDB4MDEzRiA6IFwiUHJpbWFyeUNocm9tYXRpY2l0aWVzXCIsXG4gICAgICAgIDB4MDIxMSA6IFwiWUNiQ3JDb2VmZmljaWVudHNcIixcbiAgICAgICAgMHgwMjE0IDogXCJSZWZlcmVuY2VCbGFja1doaXRlXCIsXG4gICAgICAgIDB4MDEzMiA6IFwiRGF0ZVRpbWVcIixcbiAgICAgICAgMHgwMTBFIDogXCJJbWFnZURlc2NyaXB0aW9uXCIsXG4gICAgICAgIDB4MDEwRiA6IFwiTWFrZVwiLFxuICAgICAgICAweDAxMTAgOiBcIk1vZGVsXCIsXG4gICAgICAgIDB4MDEzMSA6IFwiU29mdHdhcmVcIixcbiAgICAgICAgMHgwMTNCIDogXCJBcnRpc3RcIixcbiAgICAgICAgMHg4Mjk4IDogXCJDb3B5cmlnaHRcIlxuICAgIH07XG5cbiAgICB2YXIgR1BTVGFncyA9IEVYSUYuR1BTVGFncyA9IHtcbiAgICAgICAgMHgwMDAwIDogXCJHUFNWZXJzaW9uSURcIixcbiAgICAgICAgMHgwMDAxIDogXCJHUFNMYXRpdHVkZVJlZlwiLFxuICAgICAgICAweDAwMDIgOiBcIkdQU0xhdGl0dWRlXCIsXG4gICAgICAgIDB4MDAwMyA6IFwiR1BTTG9uZ2l0dWRlUmVmXCIsXG4gICAgICAgIDB4MDAwNCA6IFwiR1BTTG9uZ2l0dWRlXCIsXG4gICAgICAgIDB4MDAwNSA6IFwiR1BTQWx0aXR1ZGVSZWZcIixcbiAgICAgICAgMHgwMDA2IDogXCJHUFNBbHRpdHVkZVwiLFxuICAgICAgICAweDAwMDcgOiBcIkdQU1RpbWVTdGFtcFwiLFxuICAgICAgICAweDAwMDggOiBcIkdQU1NhdGVsbGl0ZXNcIixcbiAgICAgICAgMHgwMDA5IDogXCJHUFNTdGF0dXNcIixcbiAgICAgICAgMHgwMDBBIDogXCJHUFNNZWFzdXJlTW9kZVwiLFxuICAgICAgICAweDAwMEIgOiBcIkdQU0RPUFwiLFxuICAgICAgICAweDAwMEMgOiBcIkdQU1NwZWVkUmVmXCIsXG4gICAgICAgIDB4MDAwRCA6IFwiR1BTU3BlZWRcIixcbiAgICAgICAgMHgwMDBFIDogXCJHUFNUcmFja1JlZlwiLFxuICAgICAgICAweDAwMEYgOiBcIkdQU1RyYWNrXCIsXG4gICAgICAgIDB4MDAxMCA6IFwiR1BTSW1nRGlyZWN0aW9uUmVmXCIsXG4gICAgICAgIDB4MDAxMSA6IFwiR1BTSW1nRGlyZWN0aW9uXCIsXG4gICAgICAgIDB4MDAxMiA6IFwiR1BTTWFwRGF0dW1cIixcbiAgICAgICAgMHgwMDEzIDogXCJHUFNEZXN0TGF0aXR1ZGVSZWZcIixcbiAgICAgICAgMHgwMDE0IDogXCJHUFNEZXN0TGF0aXR1ZGVcIixcbiAgICAgICAgMHgwMDE1IDogXCJHUFNEZXN0TG9uZ2l0dWRlUmVmXCIsXG4gICAgICAgIDB4MDAxNiA6IFwiR1BTRGVzdExvbmdpdHVkZVwiLFxuICAgICAgICAweDAwMTcgOiBcIkdQU0Rlc3RCZWFyaW5nUmVmXCIsXG4gICAgICAgIDB4MDAxOCA6IFwiR1BTRGVzdEJlYXJpbmdcIixcbiAgICAgICAgMHgwMDE5IDogXCJHUFNEZXN0RGlzdGFuY2VSZWZcIixcbiAgICAgICAgMHgwMDFBIDogXCJHUFNEZXN0RGlzdGFuY2VcIixcbiAgICAgICAgMHgwMDFCIDogXCJHUFNQcm9jZXNzaW5nTWV0aG9kXCIsXG4gICAgICAgIDB4MDAxQyA6IFwiR1BTQXJlYUluZm9ybWF0aW9uXCIsXG4gICAgICAgIDB4MDAxRCA6IFwiR1BTRGF0ZVN0YW1wXCIsXG4gICAgICAgIDB4MDAxRSA6IFwiR1BTRGlmZmVyZW50aWFsXCJcbiAgICB9O1xuXG4gICAgIC8vIEVYSUYgMi4zIFNwZWNcbiAgICB2YXIgSUZEMVRhZ3MgPSBFWElGLklGRDFUYWdzID0ge1xuICAgICAgICAweDAxMDA6IFwiSW1hZ2VXaWR0aFwiLFxuICAgICAgICAweDAxMDE6IFwiSW1hZ2VIZWlnaHRcIixcbiAgICAgICAgMHgwMTAyOiBcIkJpdHNQZXJTYW1wbGVcIixcbiAgICAgICAgMHgwMTAzOiBcIkNvbXByZXNzaW9uXCIsXG4gICAgICAgIDB4MDEwNjogXCJQaG90b21ldHJpY0ludGVycHJldGF0aW9uXCIsXG4gICAgICAgIDB4MDExMTogXCJTdHJpcE9mZnNldHNcIixcbiAgICAgICAgMHgwMTEyOiBcIk9yaWVudGF0aW9uXCIsXG4gICAgICAgIDB4MDExNTogXCJTYW1wbGVzUGVyUGl4ZWxcIixcbiAgICAgICAgMHgwMTE2OiBcIlJvd3NQZXJTdHJpcFwiLFxuICAgICAgICAweDAxMTc6IFwiU3RyaXBCeXRlQ291bnRzXCIsXG4gICAgICAgIDB4MDExQTogXCJYUmVzb2x1dGlvblwiLFxuICAgICAgICAweDAxMUI6IFwiWVJlc29sdXRpb25cIixcbiAgICAgICAgMHgwMTFDOiBcIlBsYW5hckNvbmZpZ3VyYXRpb25cIixcbiAgICAgICAgMHgwMTI4OiBcIlJlc29sdXRpb25Vbml0XCIsXG4gICAgICAgIDB4MDIwMTogXCJKcGVnSUZPZmZzZXRcIiwgICAgLy8gV2hlbiBpbWFnZSBmb3JtYXQgaXMgSlBFRywgdGhpcyB2YWx1ZSBzaG93IG9mZnNldCB0byBKUEVHIGRhdGEgc3RvcmVkLihha2EgXCJUaHVtYm5haWxPZmZzZXRcIiBvciBcIkpQRUdJbnRlcmNoYW5nZUZvcm1hdFwiKVxuICAgICAgICAweDAyMDI6IFwiSnBlZ0lGQnl0ZUNvdW50XCIsIC8vIFdoZW4gaW1hZ2UgZm9ybWF0IGlzIEpQRUcsIHRoaXMgdmFsdWUgc2hvd3MgZGF0YSBzaXplIG9mIEpQRUcgaW1hZ2UgKGFrYSBcIlRodW1ibmFpbExlbmd0aFwiIG9yIFwiSlBFR0ludGVyY2hhbmdlRm9ybWF0TGVuZ3RoXCIpXG4gICAgICAgIDB4MDIxMTogXCJZQ2JDckNvZWZmaWNpZW50c1wiLFxuICAgICAgICAweDAyMTI6IFwiWUNiQ3JTdWJTYW1wbGluZ1wiLFxuICAgICAgICAweDAyMTM6IFwiWUNiQ3JQb3NpdGlvbmluZ1wiLFxuICAgICAgICAweDAyMTQ6IFwiUmVmZXJlbmNlQmxhY2tXaGl0ZVwiXG4gICAgfTtcblxuICAgIHZhciBTdHJpbmdWYWx1ZXMgPSBFWElGLlN0cmluZ1ZhbHVlcyA9IHtcbiAgICAgICAgRXhwb3N1cmVQcm9ncmFtIDoge1xuICAgICAgICAgICAgMCA6IFwiTm90IGRlZmluZWRcIixcbiAgICAgICAgICAgIDEgOiBcIk1hbnVhbFwiLFxuICAgICAgICAgICAgMiA6IFwiTm9ybWFsIHByb2dyYW1cIixcbiAgICAgICAgICAgIDMgOiBcIkFwZXJ0dXJlIHByaW9yaXR5XCIsXG4gICAgICAgICAgICA0IDogXCJTaHV0dGVyIHByaW9yaXR5XCIsXG4gICAgICAgICAgICA1IDogXCJDcmVhdGl2ZSBwcm9ncmFtXCIsXG4gICAgICAgICAgICA2IDogXCJBY3Rpb24gcHJvZ3JhbVwiLFxuICAgICAgICAgICAgNyA6IFwiUG9ydHJhaXQgbW9kZVwiLFxuICAgICAgICAgICAgOCA6IFwiTGFuZHNjYXBlIG1vZGVcIlxuICAgICAgICB9LFxuICAgICAgICBNZXRlcmluZ01vZGUgOiB7XG4gICAgICAgICAgICAwIDogXCJVbmtub3duXCIsXG4gICAgICAgICAgICAxIDogXCJBdmVyYWdlXCIsXG4gICAgICAgICAgICAyIDogXCJDZW50ZXJXZWlnaHRlZEF2ZXJhZ2VcIixcbiAgICAgICAgICAgIDMgOiBcIlNwb3RcIixcbiAgICAgICAgICAgIDQgOiBcIk11bHRpU3BvdFwiLFxuICAgICAgICAgICAgNSA6IFwiUGF0dGVyblwiLFxuICAgICAgICAgICAgNiA6IFwiUGFydGlhbFwiLFxuICAgICAgICAgICAgMjU1IDogXCJPdGhlclwiXG4gICAgICAgIH0sXG4gICAgICAgIExpZ2h0U291cmNlIDoge1xuICAgICAgICAgICAgMCA6IFwiVW5rbm93blwiLFxuICAgICAgICAgICAgMSA6IFwiRGF5bGlnaHRcIixcbiAgICAgICAgICAgIDIgOiBcIkZsdW9yZXNjZW50XCIsXG4gICAgICAgICAgICAzIDogXCJUdW5nc3RlbiAoaW5jYW5kZXNjZW50IGxpZ2h0KVwiLFxuICAgICAgICAgICAgNCA6IFwiRmxhc2hcIixcbiAgICAgICAgICAgIDkgOiBcIkZpbmUgd2VhdGhlclwiLFxuICAgICAgICAgICAgMTAgOiBcIkNsb3VkeSB3ZWF0aGVyXCIsXG4gICAgICAgICAgICAxMSA6IFwiU2hhZGVcIixcbiAgICAgICAgICAgIDEyIDogXCJEYXlsaWdodCBmbHVvcmVzY2VudCAoRCA1NzAwIC0gNzEwMEspXCIsXG4gICAgICAgICAgICAxMyA6IFwiRGF5IHdoaXRlIGZsdW9yZXNjZW50IChOIDQ2MDAgLSA1NDAwSylcIixcbiAgICAgICAgICAgIDE0IDogXCJDb29sIHdoaXRlIGZsdW9yZXNjZW50IChXIDM5MDAgLSA0NTAwSylcIixcbiAgICAgICAgICAgIDE1IDogXCJXaGl0ZSBmbHVvcmVzY2VudCAoV1cgMzIwMCAtIDM3MDBLKVwiLFxuICAgICAgICAgICAgMTcgOiBcIlN0YW5kYXJkIGxpZ2h0IEFcIixcbiAgICAgICAgICAgIDE4IDogXCJTdGFuZGFyZCBsaWdodCBCXCIsXG4gICAgICAgICAgICAxOSA6IFwiU3RhbmRhcmQgbGlnaHQgQ1wiLFxuICAgICAgICAgICAgMjAgOiBcIkQ1NVwiLFxuICAgICAgICAgICAgMjEgOiBcIkQ2NVwiLFxuICAgICAgICAgICAgMjIgOiBcIkQ3NVwiLFxuICAgICAgICAgICAgMjMgOiBcIkQ1MFwiLFxuICAgICAgICAgICAgMjQgOiBcIklTTyBzdHVkaW8gdHVuZ3N0ZW5cIixcbiAgICAgICAgICAgIDI1NSA6IFwiT3RoZXJcIlxuICAgICAgICB9LFxuICAgICAgICBGbGFzaCA6IHtcbiAgICAgICAgICAgIDB4MDAwMCA6IFwiRmxhc2ggZGlkIG5vdCBmaXJlXCIsXG4gICAgICAgICAgICAweDAwMDEgOiBcIkZsYXNoIGZpcmVkXCIsXG4gICAgICAgICAgICAweDAwMDUgOiBcIlN0cm9iZSByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkXCIsXG4gICAgICAgICAgICAweDAwMDcgOiBcIlN0cm9iZSByZXR1cm4gbGlnaHQgZGV0ZWN0ZWRcIixcbiAgICAgICAgICAgIDB4MDAwOSA6IFwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZVwiLFxuICAgICAgICAgICAgMHgwMDBEIDogXCJGbGFzaCBmaXJlZCwgY29tcHVsc29yeSBmbGFzaCBtb2RlLCByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkXCIsXG4gICAgICAgICAgICAweDAwMEYgOiBcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLFxuICAgICAgICAgICAgMHgwMDEwIDogXCJGbGFzaCBkaWQgbm90IGZpcmUsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZVwiLFxuICAgICAgICAgICAgMHgwMDE4IDogXCJGbGFzaCBkaWQgbm90IGZpcmUsIGF1dG8gbW9kZVwiLFxuICAgICAgICAgICAgMHgwMDE5IDogXCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlXCIsXG4gICAgICAgICAgICAweDAwMUQgOiBcIkZsYXNoIGZpcmVkLCBhdXRvIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIixcbiAgICAgICAgICAgIDB4MDAxRiA6IFwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmV0dXJuIGxpZ2h0IGRldGVjdGVkXCIsXG4gICAgICAgICAgICAweDAwMjAgOiBcIk5vIGZsYXNoIGZ1bmN0aW9uXCIsXG4gICAgICAgICAgICAweDAwNDEgOiBcIkZsYXNoIGZpcmVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlXCIsXG4gICAgICAgICAgICAweDAwNDUgOiBcIkZsYXNoIGZpcmVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlLCByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkXCIsXG4gICAgICAgICAgICAweDAwNDcgOiBcIkZsYXNoIGZpcmVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWRcIixcbiAgICAgICAgICAgIDB4MDA0OSA6IFwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiLFxuICAgICAgICAgICAgMHgwMDREIDogXCJGbGFzaCBmaXJlZCwgY29tcHVsc29yeSBmbGFzaCBtb2RlLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlLCByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkXCIsXG4gICAgICAgICAgICAweDAwNEYgOiBcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLFxuICAgICAgICAgICAgMHgwMDU5IDogXCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlXCIsXG4gICAgICAgICAgICAweDAwNUQgOiBcIkZsYXNoIGZpcmVkLCBhdXRvIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWQsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGVcIixcbiAgICAgICAgICAgIDB4MDA1RiA6IFwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmV0dXJuIGxpZ2h0IGRldGVjdGVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlXCJcbiAgICAgICAgfSxcbiAgICAgICAgU2Vuc2luZ01ldGhvZCA6IHtcbiAgICAgICAgICAgIDEgOiBcIk5vdCBkZWZpbmVkXCIsXG4gICAgICAgICAgICAyIDogXCJPbmUtY2hpcCBjb2xvciBhcmVhIHNlbnNvclwiLFxuICAgICAgICAgICAgMyA6IFwiVHdvLWNoaXAgY29sb3IgYXJlYSBzZW5zb3JcIixcbiAgICAgICAgICAgIDQgOiBcIlRocmVlLWNoaXAgY29sb3IgYXJlYSBzZW5zb3JcIixcbiAgICAgICAgICAgIDUgOiBcIkNvbG9yIHNlcXVlbnRpYWwgYXJlYSBzZW5zb3JcIixcbiAgICAgICAgICAgIDcgOiBcIlRyaWxpbmVhciBzZW5zb3JcIixcbiAgICAgICAgICAgIDggOiBcIkNvbG9yIHNlcXVlbnRpYWwgbGluZWFyIHNlbnNvclwiXG4gICAgICAgIH0sXG4gICAgICAgIFNjZW5lQ2FwdHVyZVR5cGUgOiB7XG4gICAgICAgICAgICAwIDogXCJTdGFuZGFyZFwiLFxuICAgICAgICAgICAgMSA6IFwiTGFuZHNjYXBlXCIsXG4gICAgICAgICAgICAyIDogXCJQb3J0cmFpdFwiLFxuICAgICAgICAgICAgMyA6IFwiTmlnaHQgc2NlbmVcIlxuICAgICAgICB9LFxuICAgICAgICBTY2VuZVR5cGUgOiB7XG4gICAgICAgICAgICAxIDogXCJEaXJlY3RseSBwaG90b2dyYXBoZWRcIlxuICAgICAgICB9LFxuICAgICAgICBDdXN0b21SZW5kZXJlZCA6IHtcbiAgICAgICAgICAgIDAgOiBcIk5vcm1hbCBwcm9jZXNzXCIsXG4gICAgICAgICAgICAxIDogXCJDdXN0b20gcHJvY2Vzc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFdoaXRlQmFsYW5jZSA6IHtcbiAgICAgICAgICAgIDAgOiBcIkF1dG8gd2hpdGUgYmFsYW5jZVwiLFxuICAgICAgICAgICAgMSA6IFwiTWFudWFsIHdoaXRlIGJhbGFuY2VcIlxuICAgICAgICB9LFxuICAgICAgICBHYWluQ29udHJvbCA6IHtcbiAgICAgICAgICAgIDAgOiBcIk5vbmVcIixcbiAgICAgICAgICAgIDEgOiBcIkxvdyBnYWluIHVwXCIsXG4gICAgICAgICAgICAyIDogXCJIaWdoIGdhaW4gdXBcIixcbiAgICAgICAgICAgIDMgOiBcIkxvdyBnYWluIGRvd25cIixcbiAgICAgICAgICAgIDQgOiBcIkhpZ2ggZ2FpbiBkb3duXCJcbiAgICAgICAgfSxcbiAgICAgICAgQ29udHJhc3QgOiB7XG4gICAgICAgICAgICAwIDogXCJOb3JtYWxcIixcbiAgICAgICAgICAgIDEgOiBcIlNvZnRcIixcbiAgICAgICAgICAgIDIgOiBcIkhhcmRcIlxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uIDoge1xuICAgICAgICAgICAgMCA6IFwiTm9ybWFsXCIsXG4gICAgICAgICAgICAxIDogXCJMb3cgc2F0dXJhdGlvblwiLFxuICAgICAgICAgICAgMiA6IFwiSGlnaCBzYXR1cmF0aW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgU2hhcnBuZXNzIDoge1xuICAgICAgICAgICAgMCA6IFwiTm9ybWFsXCIsXG4gICAgICAgICAgICAxIDogXCJTb2Z0XCIsXG4gICAgICAgICAgICAyIDogXCJIYXJkXCJcbiAgICAgICAgfSxcbiAgICAgICAgU3ViamVjdERpc3RhbmNlUmFuZ2UgOiB7XG4gICAgICAgICAgICAwIDogXCJVbmtub3duXCIsXG4gICAgICAgICAgICAxIDogXCJNYWNyb1wiLFxuICAgICAgICAgICAgMiA6IFwiQ2xvc2Ugdmlld1wiLFxuICAgICAgICAgICAgMyA6IFwiRGlzdGFudCB2aWV3XCJcbiAgICAgICAgfSxcbiAgICAgICAgRmlsZVNvdXJjZSA6IHtcbiAgICAgICAgICAgIDMgOiBcIkRTQ1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAgQ29tcG9uZW50cyA6IHtcbiAgICAgICAgICAgIDAgOiBcIlwiLFxuICAgICAgICAgICAgMSA6IFwiWVwiLFxuICAgICAgICAgICAgMiA6IFwiQ2JcIixcbiAgICAgICAgICAgIDMgOiBcIkNyXCIsXG4gICAgICAgICAgICA0IDogXCJSXCIsXG4gICAgICAgICAgICA1IDogXCJHXCIsXG4gICAgICAgICAgICA2IDogXCJCXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRFdmVudChlbGVtZW50LCBldmVudCwgaGFuZGxlcikge1xuICAgICAgICBpZiAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmF0dGFjaEV2ZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KFwib25cIiArIGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGltYWdlSGFzRGF0YShpbWcpIHtcbiAgICAgICAgcmV0dXJuICEhKGltZy5leGlmZGF0YSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBiYXNlNjRUb0FycmF5QnVmZmVyKGJhc2U2NCwgY29udGVudFR5cGUpIHtcbiAgICAgICAgY29udGVudFR5cGUgPSBjb250ZW50VHlwZSB8fCBiYXNlNjQubWF0Y2goL15kYXRhXFw6KFteXFw7XSspXFw7YmFzZTY0LC9taSlbMV0gfHwgJyc7IC8vIGUuZy4gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLi4uJyA9PiAnaW1hZ2UvanBlZydcbiAgICAgICAgYmFzZTY0ID0gYmFzZTY0LnJlcGxhY2UoL15kYXRhXFw6KFteXFw7XSspXFw7YmFzZTY0LC9nbWksICcnKTtcbiAgICAgICAgdmFyIGJpbmFyeSA9IGF0b2IoYmFzZTY0KTtcbiAgICAgICAgdmFyIGxlbiA9IGJpbmFyeS5sZW5ndGg7XG4gICAgICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIobGVuKTtcbiAgICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2aWV3W2ldID0gYmluYXJ5LmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvYmplY3RVUkxUb0Jsb2IodXJsLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgaHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBodHRwLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgaHR0cC5yZXNwb25zZVR5cGUgPSBcImJsb2JcIjtcbiAgICAgICAgaHR0cC5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwIHx8IHRoaXMuc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGh0dHAuc2VuZCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEltYWdlRGF0YShpbWcsIGNhbGxiYWNrKSB7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUJpbmFyeUZpbGUoYmluRmlsZSkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBmaW5kRVhJRmluSlBFRyhiaW5GaWxlKTtcbiAgICAgICAgICAgIGltZy5leGlmZGF0YSA9IGRhdGEgfHwge307XG4gICAgICAgICAgICB2YXIgaXB0Y2RhdGEgPSBmaW5kSVBUQ2luSlBFRyhiaW5GaWxlKTtcbiAgICAgICAgICAgIGltZy5pcHRjZGF0YSA9IGlwdGNkYXRhIHx8IHt9O1xuICAgICAgICAgICAgaWYgKEVYSUYuaXNYbXBFbmFibGVkKSB7XG4gICAgICAgICAgICAgICB2YXIgeG1wZGF0YT0gZmluZFhNUGluSlBFRyhiaW5GaWxlKTtcbiAgICAgICAgICAgICAgIGltZy54bXBkYXRhID0geG1wZGF0YSB8fCB7fTsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoaW1nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbWcuc3JjKSB7XG4gICAgICAgICAgICBpZiAoL15kYXRhXFw6L2kudGVzdChpbWcuc3JjKSkgeyAvLyBEYXRhIFVSSVxuICAgICAgICAgICAgICAgIHZhciBhcnJheUJ1ZmZlciA9IGJhc2U2NFRvQXJyYXlCdWZmZXIoaW1nLnNyYyk7XG4gICAgICAgICAgICAgICAgaGFuZGxlQmluYXJ5RmlsZShhcnJheUJ1ZmZlcik7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoL15ibG9iXFw6L2kudGVzdChpbWcuc3JjKSkgeyAvLyBPYmplY3QgVVJMXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVCaW5hcnlGaWxlKGUudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvYmplY3RVUkxUb0Jsb2IoaW1nLnNyYywgZnVuY3Rpb24gKGJsb2IpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICBodHRwLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwIHx8IHRoaXMuc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVCaW5hcnlGaWxlKGh0dHAucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJDb3VsZCBub3QgbG9hZCBpbWFnZVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGh0dHAgPSBudWxsO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaHR0cC5vcGVuKFwiR0VUXCIsIGltZy5zcmMsIHRydWUpO1xuICAgICAgICAgICAgICAgIGh0dHAucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xuICAgICAgICAgICAgICAgIGh0dHAuc2VuZChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzZWxmLkZpbGVSZWFkZXIgJiYgKGltZyBpbnN0YW5jZW9mIHNlbGYuQmxvYiB8fCBpbWcgaW5zdGFuY2VvZiBzZWxmLkZpbGUpKSB7XG4gICAgICAgICAgICB2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiR290IGZpbGUgb2YgbGVuZ3RoIFwiICsgZS50YXJnZXQucmVzdWx0LmJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgICAgIGhhbmRsZUJpbmFyeUZpbGUoZS50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoaW1nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRFWElGaW5KUEVHKGZpbGUpIHtcbiAgICAgICAgdmFyIGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGZpbGUpO1xuXG4gICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJHb3QgZmlsZSBvZiBsZW5ndGggXCIgKyBmaWxlLmJ5dGVMZW5ndGgpO1xuICAgICAgICBpZiAoKGRhdGFWaWV3LmdldFVpbnQ4KDApICE9IDB4RkYpIHx8IChkYXRhVmlldy5nZXRVaW50OCgxKSAhPSAweEQ4KSkge1xuICAgICAgICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIk5vdCBhIHZhbGlkIEpQRUdcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vdCBhIHZhbGlkIGpwZWdcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXQgPSAyLFxuICAgICAgICAgICAgbGVuZ3RoID0gZmlsZS5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgbWFya2VyO1xuXG4gICAgICAgIHdoaWxlIChvZmZzZXQgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpICE9IDB4RkYpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiTm90IGEgdmFsaWQgbWFya2VyIGF0IG9mZnNldCBcIiArIG9mZnNldCArIFwiLCBmb3VuZDogXCIgKyBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vdCBhIHZhbGlkIG1hcmtlciwgc29tZXRoaW5nIGlzIHdyb25nXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hcmtlciA9IGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIDEpO1xuICAgICAgICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhtYXJrZXIpO1xuXG4gICAgICAgICAgICAvLyB3ZSBjb3VsZCBpbXBsZW1lbnQgaGFuZGxpbmcgZm9yIG90aGVyIG1hcmtlcnMgaGVyZSxcbiAgICAgICAgICAgIC8vIGJ1dCB3ZSdyZSBvbmx5IGxvb2tpbmcgZm9yIDB4RkZFMSBmb3IgRVhJRiBkYXRhXG5cbiAgICAgICAgICAgIGlmIChtYXJrZXIgPT0gMjI1KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIkZvdW5kIDB4RkZFMSBtYXJrZXJcIik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVhZEVYSUZEYXRhKGRhdGFWaWV3LCBvZmZzZXQgKyA0LCBkYXRhVmlldy5nZXRVaW50MTYob2Zmc2V0ICsgMikgLSAyKTtcblxuICAgICAgICAgICAgICAgIC8vIG9mZnNldCArPSAyICsgZmlsZS5nZXRTaG9ydEF0KG9mZnNldCsyLCB0cnVlKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMiArIGRhdGFWaWV3LmdldFVpbnQxNihvZmZzZXQrMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZElQVENpbkpQRUcoZmlsZSkge1xuICAgICAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoZmlsZSk7XG5cbiAgICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIkdvdCBmaWxlIG9mIGxlbmd0aCBcIiArIGZpbGUuYnl0ZUxlbmd0aCk7XG4gICAgICAgIGlmICgoZGF0YVZpZXcuZ2V0VWludDgoMCkgIT0gMHhGRikgfHwgKGRhdGFWaWV3LmdldFVpbnQ4KDEpICE9IDB4RDgpKSB7XG4gICAgICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiTm90IGEgdmFsaWQgSlBFR1wiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm90IGEgdmFsaWQganBlZ1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IDIsXG4gICAgICAgICAgICBsZW5ndGggPSBmaWxlLmJ5dGVMZW5ndGg7XG5cblxuICAgICAgICB2YXIgaXNGaWVsZFNlZ21lbnRTdGFydCA9IGZ1bmN0aW9uKGRhdGFWaWV3LCBvZmZzZXQpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpID09PSAweDM4ICYmXG4gICAgICAgICAgICAgICAgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KzEpID09PSAweDQyICYmXG4gICAgICAgICAgICAgICAgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KzIpID09PSAweDQ5ICYmXG4gICAgICAgICAgICAgICAgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KzMpID09PSAweDREICYmXG4gICAgICAgICAgICAgICAgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KzQpID09PSAweDA0ICYmXG4gICAgICAgICAgICAgICAgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KzUpID09PSAweDA0XG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdoaWxlIChvZmZzZXQgPCBsZW5ndGgpIHtcblxuICAgICAgICAgICAgaWYgKCBpc0ZpZWxkU2VnbWVudFN0YXJ0KGRhdGFWaWV3LCBvZmZzZXQgKSl7XG5cbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgbmFtZSBoZWFkZXIgKHdoaWNoIGlzIHBhZGRlZCB0byBhbiBldmVuIG51bWJlciBvZiBieXRlcylcbiAgICAgICAgICAgICAgICB2YXIgbmFtZUhlYWRlckxlbmd0aCA9IGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCs3KTtcbiAgICAgICAgICAgICAgICBpZihuYW1lSGVhZGVyTGVuZ3RoICUgMiAhPT0gMCkgbmFtZUhlYWRlckxlbmd0aCArPSAxO1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciBwcmUgcGhvdG9zaG9wIDYgZm9ybWF0XG4gICAgICAgICAgICAgICAgaWYobmFtZUhlYWRlckxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBbHdheXMgNFxuICAgICAgICAgICAgICAgICAgICBuYW1lSGVhZGVyTGVuZ3RoID0gNDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRPZmZzZXQgPSBvZmZzZXQgKyA4ICsgbmFtZUhlYWRlckxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbkxlbmd0aCA9IGRhdGFWaWV3LmdldFVpbnQxNihvZmZzZXQgKyA2ICsgbmFtZUhlYWRlckxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVhZElQVENEYXRhKGZpbGUsIHN0YXJ0T2Zmc2V0LCBzZWN0aW9uTGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gTm90IHRoZSBtYXJrZXIsIGNvbnRpbnVlIHNlYXJjaGluZ1xuICAgICAgICAgICAgb2Zmc2V0Kys7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHZhciBJcHRjRmllbGRNYXAgPSB7XG4gICAgICAgIDB4NzggOiAnY2FwdGlvbicsXG4gICAgICAgIDB4NkUgOiAnY3JlZGl0JyxcbiAgICAgICAgMHgxOSA6ICdrZXl3b3JkcycsXG4gICAgICAgIDB4MzcgOiAnZGF0ZUNyZWF0ZWQnLFxuICAgICAgICAweDUwIDogJ2J5bGluZScsXG4gICAgICAgIDB4NTUgOiAnYnlsaW5lVGl0bGUnLFxuICAgICAgICAweDdBIDogJ2NhcHRpb25Xcml0ZXInLFxuICAgICAgICAweDY5IDogJ2hlYWRsaW5lJyxcbiAgICAgICAgMHg3NCA6ICdjb3B5cmlnaHQnLFxuICAgICAgICAweDBGIDogJ2NhdGVnb3J5J1xuICAgIH07XG4gICAgZnVuY3Rpb24gcmVhZElQVENEYXRhKGZpbGUsIHN0YXJ0T2Zmc2V0LCBzZWN0aW9uTGVuZ3RoKXtcbiAgICAgICAgdmFyIGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGZpbGUpO1xuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICB2YXIgZmllbGRWYWx1ZSwgZmllbGROYW1lLCBkYXRhU2l6ZSwgc2VnbWVudFR5cGUsIHNlZ21lbnRTaXplO1xuICAgICAgICB2YXIgc2VnbWVudFN0YXJ0UG9zID0gc3RhcnRPZmZzZXQ7XG4gICAgICAgIHdoaWxlKHNlZ21lbnRTdGFydFBvcyA8IHN0YXJ0T2Zmc2V0K3NlY3Rpb25MZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKGRhdGFWaWV3LmdldFVpbnQ4KHNlZ21lbnRTdGFydFBvcykgPT09IDB4MUMgJiYgZGF0YVZpZXcuZ2V0VWludDgoc2VnbWVudFN0YXJ0UG9zKzEpID09PSAweDAyKXtcbiAgICAgICAgICAgICAgICBzZWdtZW50VHlwZSA9IGRhdGFWaWV3LmdldFVpbnQ4KHNlZ21lbnRTdGFydFBvcysyKTtcbiAgICAgICAgICAgICAgICBpZihzZWdtZW50VHlwZSBpbiBJcHRjRmllbGRNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNpemUgPSBkYXRhVmlldy5nZXRJbnQxNihzZWdtZW50U3RhcnRQb3MrMyk7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRTaXplID0gZGF0YVNpemUgKyA1O1xuICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSBJcHRjRmllbGRNYXBbc2VnbWVudFR5cGVdO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlID0gZ2V0U3RyaW5nRnJvbURCKGRhdGFWaWV3LCBzZWdtZW50U3RhcnRQb3MrNSwgZGF0YVNpemUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSBhbHJlYWR5IHN0b3JlZCBhIHZhbHVlIHdpdGggdGhpcyBuYW1lXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuaGFzT3duUHJvcGVydHkoZmllbGROYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmFsdWUgYWxyZWFkeSBzdG9yZWQgd2l0aCB0aGlzIG5hbWUsIGNyZWF0ZSBtdWx0aXZhbHVlIGZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhW2ZpZWxkTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbZmllbGROYW1lXS5wdXNoKGZpZWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtmaWVsZE5hbWVdID0gW2RhdGFbZmllbGROYW1lXSwgZmllbGRWYWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ZpZWxkTmFtZV0gPSBmaWVsZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWdtZW50U3RhcnRQb3MrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gcmVhZFRhZ3MoZmlsZSwgdGlmZlN0YXJ0LCBkaXJTdGFydCwgc3RyaW5ncywgYmlnRW5kKSB7XG4gICAgICAgIHZhciBlbnRyaWVzID0gZmlsZS5nZXRVaW50MTYoZGlyU3RhcnQsICFiaWdFbmQpLFxuICAgICAgICAgICAgdGFncyA9IHt9LFxuICAgICAgICAgICAgZW50cnlPZmZzZXQsIHRhZyxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpPTA7aTxlbnRyaWVzO2krKykge1xuICAgICAgICAgICAgZW50cnlPZmZzZXQgPSBkaXJTdGFydCArIGkqMTIgKyAyO1xuICAgICAgICAgICAgdGFnID0gc3RyaW5nc1tmaWxlLmdldFVpbnQxNihlbnRyeU9mZnNldCwgIWJpZ0VuZCldO1xuICAgICAgICAgICAgaWYgKCF0YWcgJiYgZGVidWcpIGNvbnNvbGUubG9nKFwiVW5rbm93biB0YWc6IFwiICsgZmlsZS5nZXRVaW50MTYoZW50cnlPZmZzZXQsICFiaWdFbmQpKTtcbiAgICAgICAgICAgIHRhZ3NbdGFnXSA9IHJlYWRUYWdWYWx1ZShmaWxlLCBlbnRyeU9mZnNldCwgdGlmZlN0YXJ0LCBkaXJTdGFydCwgYmlnRW5kKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFncztcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHJlYWRUYWdWYWx1ZShmaWxlLCBlbnRyeU9mZnNldCwgdGlmZlN0YXJ0LCBkaXJTdGFydCwgYmlnRW5kKSB7XG4gICAgICAgIHZhciB0eXBlID0gZmlsZS5nZXRVaW50MTYoZW50cnlPZmZzZXQrMiwgIWJpZ0VuZCksXG4gICAgICAgICAgICBudW1WYWx1ZXMgPSBmaWxlLmdldFVpbnQzMihlbnRyeU9mZnNldCs0LCAhYmlnRW5kKSxcbiAgICAgICAgICAgIHZhbHVlT2Zmc2V0ID0gZmlsZS5nZXRVaW50MzIoZW50cnlPZmZzZXQrOCwgIWJpZ0VuZCkgKyB0aWZmU3RhcnQsXG4gICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICB2YWxzLCB2YWwsIG4sXG4gICAgICAgICAgICBudW1lcmF0b3IsIGRlbm9taW5hdG9yO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxOiAvLyBieXRlLCA4LWJpdCB1bnNpZ25lZCBpbnRcbiAgICAgICAgICAgIGNhc2UgNzogLy8gdW5kZWZpbmVkLCA4LWJpdCBieXRlLCB2YWx1ZSBkZXBlbmRpbmcgb24gZmllbGRcbiAgICAgICAgICAgICAgICBpZiAobnVtVmFsdWVzID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGUuZ2V0VWludDgoZW50cnlPZmZzZXQgKyA4LCAhYmlnRW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBudW1WYWx1ZXMgPiA0ID8gdmFsdWVPZmZzZXQgOiAoZW50cnlPZmZzZXQgKyA4KTtcbiAgICAgICAgICAgICAgICAgICAgdmFscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG49MDtuPG51bVZhbHVlcztuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHNbbl0gPSBmaWxlLmdldFVpbnQ4KG9mZnNldCArIG4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAyOiAvLyBhc2NpaSwgOC1iaXQgYnl0ZVxuICAgICAgICAgICAgICAgIG9mZnNldCA9IG51bVZhbHVlcyA+IDQgPyB2YWx1ZU9mZnNldCA6IChlbnRyeU9mZnNldCArIDgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRTdHJpbmdGcm9tREIoZmlsZSwgb2Zmc2V0LCBudW1WYWx1ZXMtMSk7XG5cbiAgICAgICAgICAgIGNhc2UgMzogLy8gc2hvcnQsIDE2IGJpdCBpbnRcbiAgICAgICAgICAgICAgICBpZiAobnVtVmFsdWVzID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGUuZ2V0VWludDE2KGVudHJ5T2Zmc2V0ICsgOCwgIWJpZ0VuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gbnVtVmFsdWVzID4gMiA/IHZhbHVlT2Zmc2V0IDogKGVudHJ5T2Zmc2V0ICsgOCk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuPTA7bjxudW1WYWx1ZXM7bisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxzW25dID0gZmlsZS5nZXRVaW50MTYob2Zmc2V0ICsgMipuLCAhYmlnRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFscztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgNDogLy8gbG9uZywgMzIgYml0IGludFxuICAgICAgICAgICAgICAgIGlmIChudW1WYWx1ZXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZS5nZXRVaW50MzIoZW50cnlPZmZzZXQgKyA4LCAhYmlnRW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobj0wO248bnVtVmFsdWVzO24rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tuXSA9IGZpbGUuZ2V0VWludDMyKHZhbHVlT2Zmc2V0ICsgNCpuLCAhYmlnRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFscztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgNTogICAgLy8gcmF0aW9uYWwgPSB0d28gbG9uZyB2YWx1ZXMsIGZpcnN0IGlzIG51bWVyYXRvciwgc2Vjb25kIGlzIGRlbm9taW5hdG9yXG4gICAgICAgICAgICAgICAgaWYgKG51bVZhbHVlcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bWVyYXRvciA9IGZpbGUuZ2V0VWludDMyKHZhbHVlT2Zmc2V0LCAhYmlnRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgZGVub21pbmF0b3IgPSBmaWxlLmdldFVpbnQzMih2YWx1ZU9mZnNldCs0LCAhYmlnRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gbmV3IE51bWJlcihudW1lcmF0b3IgLyBkZW5vbWluYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIHZhbC5udW1lcmF0b3IgPSBudW1lcmF0b3I7XG4gICAgICAgICAgICAgICAgICAgIHZhbC5kZW5vbWluYXRvciA9IGRlbm9taW5hdG9yO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuPTA7bjxudW1WYWx1ZXM7bisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1lcmF0b3IgPSBmaWxlLmdldFVpbnQzMih2YWx1ZU9mZnNldCArIDgqbiwgIWJpZ0VuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZW5vbWluYXRvciA9IGZpbGUuZ2V0VWludDMyKHZhbHVlT2Zmc2V0KzQgKyA4Km4sICFiaWdFbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tuXSA9IG5ldyBOdW1iZXIobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tuXS5udW1lcmF0b3IgPSBudW1lcmF0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxzW25dLmRlbm9taW5hdG9yID0gZGVub21pbmF0b3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIDk6IC8vIHNsb25nLCAzMiBiaXQgc2lnbmVkIGludFxuICAgICAgICAgICAgICAgIGlmIChudW1WYWx1ZXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZS5nZXRJbnQzMihlbnRyeU9mZnNldCArIDgsICFiaWdFbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuPTA7bjxudW1WYWx1ZXM7bisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxzW25dID0gZmlsZS5nZXRJbnQzMih2YWx1ZU9mZnNldCArIDQqbiwgIWJpZ0VuZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIDEwOiAvLyBzaWduZWQgcmF0aW9uYWwsIHR3byBzbG9uZ3MsIGZpcnN0IGlzIG51bWVyYXRvciwgc2Vjb25kIGlzIGRlbm9taW5hdG9yXG4gICAgICAgICAgICAgICAgaWYgKG51bVZhbHVlcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlLmdldEludDMyKHZhbHVlT2Zmc2V0LCAhYmlnRW5kKSAvIGZpbGUuZ2V0SW50MzIodmFsdWVPZmZzZXQrNCwgIWJpZ0VuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG49MDtuPG51bVZhbHVlcztuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHNbbl0gPSBmaWxlLmdldEludDMyKHZhbHVlT2Zmc2V0ICsgOCpuLCAhYmlnRW5kKSAvIGZpbGUuZ2V0SW50MzIodmFsdWVPZmZzZXQrNCArIDgqbiwgIWJpZ0VuZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBHaXZlbiBhbiBJRkQgKEltYWdlIEZpbGUgRGlyZWN0b3J5KSBzdGFydCBvZmZzZXRcbiAgICAqIHJldHVybnMgYW4gb2Zmc2V0IHRvIG5leHQgSUZEIG9yIDAgaWYgaXQncyB0aGUgbGFzdCBJRkQuXG4gICAgKi9cbiAgICBmdW5jdGlvbiBnZXROZXh0SUZET2Zmc2V0KGRhdGFWaWV3LCBkaXJTdGFydCwgYmlnRW5kKXtcbiAgICAgICAgLy90aGUgZmlyc3QgMmJ5dGVzIG1lYW5zIHRoZSBudW1iZXIgb2YgZGlyZWN0b3J5IGVudHJpZXMgY29udGFpbnMgaW4gdGhpcyBJRkRcbiAgICAgICAgdmFyIGVudHJpZXMgPSBkYXRhVmlldy5nZXRVaW50MTYoZGlyU3RhcnQsICFiaWdFbmQpO1xuXG4gICAgICAgIC8vIEFmdGVyIGxhc3QgZGlyZWN0b3J5IGVudHJ5LCB0aGVyZSBpcyBhIDRieXRlcyBvZiBkYXRhLFxuICAgICAgICAvLyBpdCBtZWFucyBhbiBvZmZzZXQgdG8gbmV4dCBJRkQuXG4gICAgICAgIC8vIElmIGl0cyB2YWx1ZSBpcyAnMHgwMDAwMDAwMCcsIGl0IG1lYW5zIHRoaXMgaXMgdGhlIGxhc3QgSUZEIGFuZCB0aGVyZSBpcyBubyBsaW5rZWQgSUZELlxuXG4gICAgICAgIHJldHVybiBkYXRhVmlldy5nZXRVaW50MzIoZGlyU3RhcnQgKyAyICsgZW50cmllcyAqIDEyLCAhYmlnRW5kKTsgLy8gZWFjaCBlbnRyeSBpcyAxMiBieXRlcyBsb25nXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZFRodW1ibmFpbEltYWdlKGRhdGFWaWV3LCB0aWZmU3RhcnQsIGZpcnN0SUZET2Zmc2V0LCBiaWdFbmQpe1xuICAgICAgICAvLyBnZXQgdGhlIElGRDEgb2Zmc2V0XG4gICAgICAgIHZhciBJRkQxT2Zmc2V0UG9pbnRlciA9IGdldE5leHRJRkRPZmZzZXQoZGF0YVZpZXcsIHRpZmZTdGFydCtmaXJzdElGRE9mZnNldCwgYmlnRW5kKTtcblxuICAgICAgICBpZiAoIUlGRDFPZmZzZXRQb2ludGVyKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnKioqKioqKiogSUZEMU9mZnNldCBpcyBlbXB0eSwgaW1hZ2UgdGh1bWIgbm90IGZvdW5kICoqKioqKioqJyk7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoSUZEMU9mZnNldFBvaW50ZXIgPiBkYXRhVmlldy5ieXRlTGVuZ3RoKSB7IC8vIHRoaXMgc2hvdWxkIG5vdCBoYXBwZW5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCcqKioqKioqKiBJRkQxT2Zmc2V0IGlzIG91dHNpZGUgdGhlIGJvdW5kcyBvZiB0aGUgRGF0YVZpZXcgKioqKioqKionKTtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnKioqKioqKiAgdGh1bWJuYWlsIElGRCBvZmZzZXQgKElGRDEpIGlzOiAlcycsIElGRDFPZmZzZXRQb2ludGVyKTtcblxuICAgICAgICB2YXIgdGh1bWJUYWdzID0gcmVhZFRhZ3MoZGF0YVZpZXcsIHRpZmZTdGFydCwgdGlmZlN0YXJ0ICsgSUZEMU9mZnNldFBvaW50ZXIsIElGRDFUYWdzLCBiaWdFbmQpXG5cbiAgICAgICAgLy8gRVhJRiAyLjMgc3BlY2lmaWNhdGlvbiBmb3IgSlBFRyBmb3JtYXQgdGh1bWJuYWlsXG5cbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIG9mIENvbXByZXNzaW9uKDB4MDEwMykgVGFnIGluIElGRDEgaXMgJzYnLCB0aHVtYm5haWwgaW1hZ2UgZm9ybWF0IGlzIEpQRUcuXG4gICAgICAgIC8vIE1vc3Qgb2YgRXhpZiBpbWFnZSB1c2VzIEpQRUcgZm9ybWF0IGZvciB0aHVtYm5haWwuIEluIHRoYXQgY2FzZSwgeW91IGNhbiBnZXQgb2Zmc2V0IG9mIHRodW1ibmFpbFxuICAgICAgICAvLyBieSBKcGVnSUZPZmZzZXQoMHgwMjAxKSBUYWcgaW4gSUZEMSwgc2l6ZSBvZiB0aHVtYm5haWwgYnkgSnBlZ0lGQnl0ZUNvdW50KDB4MDIwMikgVGFnLlxuICAgICAgICAvLyBEYXRhIGZvcm1hdCBpcyBvcmRpbmFyeSBKUEVHIGZvcm1hdCwgc3RhcnRzIGZyb20gMHhGRkQ4IGFuZCBlbmRzIGJ5IDB4RkZEOS4gSXQgc2VlbXMgdGhhdFxuICAgICAgICAvLyBKUEVHIGZvcm1hdCBhbmQgMTYweDEyMHBpeGVscyBvZiBzaXplIGFyZSByZWNvbW1lbmRlZCB0aHVtYm5haWwgZm9ybWF0IGZvciBFeGlmMi4xIG9yIGxhdGVyLlxuXG4gICAgICAgIGlmICh0aHVtYlRhZ3NbJ0NvbXByZXNzaW9uJ10pIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdUaHVtYm5haWwgaW1hZ2UgZm91bmQhJyk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodGh1bWJUYWdzWydDb21wcmVzc2lvbiddKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnVGh1bWJuYWlsIGltYWdlIGZvcm1hdCBpcyBKUEVHJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aHVtYlRhZ3MuSnBlZ0lGT2Zmc2V0ICYmIHRodW1iVGFncy5KcGVnSUZCeXRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXh0cmFjdCB0aGUgdGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdE9mZnNldCA9IHRpZmZTdGFydCArIHRodW1iVGFncy5KcGVnSUZPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdExlbmd0aCA9IHRodW1iVGFncy5KcGVnSUZCeXRlQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYlRhZ3NbJ2Jsb2InXSA9IG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShkYXRhVmlldy5idWZmZXIsIHRPZmZzZXQsIHRMZW5ndGgpXSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9qcGVnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGh1bWJuYWlsIGltYWdlIGZvcm1hdCBpcyBUSUZGLCB3aGljaCBpcyBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVua25vd24gdGh1bWJuYWlsIGltYWdlIGZvcm1hdCAnJXMnXCIsIHRodW1iVGFnc1snQ29tcHJlc3Npb24nXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGh1bWJUYWdzWydQaG90b21ldHJpY0ludGVycHJldGF0aW9uJ10gPT0gMikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaHVtYm5haWwgaW1hZ2UgZm9ybWF0IGlzIFJHQiwgd2hpY2ggaXMgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGh1bWJUYWdzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFN0cmluZ0Zyb21EQihidWZmZXIsIHN0YXJ0LCBsZW5ndGgpIHtcbiAgICAgICAgdmFyIG91dHN0ciA9IFwiXCI7XG4gICAgICAgIGZvciAobiA9IHN0YXJ0OyBuIDwgc3RhcnQrbGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIG91dHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZmZlci5nZXRVaW50OChuKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHN0cjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFkRVhJRkRhdGEoZmlsZSwgc3RhcnQpIHtcbiAgICAgICAgaWYgKGdldFN0cmluZ0Zyb21EQihmaWxlLCBzdGFydCwgNCkgIT0gXCJFeGlmXCIpIHtcbiAgICAgICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJOb3QgdmFsaWQgRVhJRiBkYXRhISBcIiArIGdldFN0cmluZ0Zyb21EQihmaWxlLCBzdGFydCwgNCkpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJpZ0VuZCxcbiAgICAgICAgICAgIHRhZ3MsIHRhZyxcbiAgICAgICAgICAgIGV4aWZEYXRhLCBncHNEYXRhLFxuICAgICAgICAgICAgdGlmZk9mZnNldCA9IHN0YXJ0ICsgNjtcblxuICAgICAgICAvLyB0ZXN0IGZvciBUSUZGIHZhbGlkaXR5IGFuZCBlbmRpYW5uZXNzXG4gICAgICAgIGlmIChmaWxlLmdldFVpbnQxNih0aWZmT2Zmc2V0KSA9PSAweDQ5NDkpIHtcbiAgICAgICAgICAgIGJpZ0VuZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZ2V0VWludDE2KHRpZmZPZmZzZXQpID09IDB4NEQ0RCkge1xuICAgICAgICAgICAgYmlnRW5kID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJOb3QgdmFsaWQgVElGRiBkYXRhISAobm8gMHg0OTQ5IG9yIDB4NEQ0RClcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlsZS5nZXRVaW50MTYodGlmZk9mZnNldCsyLCAhYmlnRW5kKSAhPSAweDAwMkEpIHtcbiAgICAgICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJOb3QgdmFsaWQgVElGRiBkYXRhISAobm8gMHgwMDJBKVwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaXJzdElGRE9mZnNldCA9IGZpbGUuZ2V0VWludDMyKHRpZmZPZmZzZXQrNCwgIWJpZ0VuZCk7XG5cbiAgICAgICAgaWYgKGZpcnN0SUZET2Zmc2V0IDwgMHgwMDAwMDAwOCkge1xuICAgICAgICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIk5vdCB2YWxpZCBUSUZGIGRhdGEhIChGaXJzdCBvZmZzZXQgbGVzcyB0aGFuIDgpXCIsIGZpbGUuZ2V0VWludDMyKHRpZmZPZmZzZXQrNCwgIWJpZ0VuZCkpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFncyA9IHJlYWRUYWdzKGZpbGUsIHRpZmZPZmZzZXQsIHRpZmZPZmZzZXQgKyBmaXJzdElGRE9mZnNldCwgVGlmZlRhZ3MsIGJpZ0VuZCk7XG5cbiAgICAgICAgaWYgKHRhZ3MuRXhpZklGRFBvaW50ZXIpIHtcbiAgICAgICAgICAgIGV4aWZEYXRhID0gcmVhZFRhZ3MoZmlsZSwgdGlmZk9mZnNldCwgdGlmZk9mZnNldCArIHRhZ3MuRXhpZklGRFBvaW50ZXIsIEV4aWZUYWdzLCBiaWdFbmQpO1xuICAgICAgICAgICAgZm9yICh0YWcgaW4gZXhpZkRhdGEpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRhZykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTGlnaHRTb3VyY2VcIiA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJGbGFzaFwiIDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk1ldGVyaW5nTW9kZVwiIDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkV4cG9zdXJlUHJvZ3JhbVwiIDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlNlbnNpbmdNZXRob2RcIiA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJTY2VuZUNhcHR1cmVUeXBlXCIgOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU2NlbmVUeXBlXCIgOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ3VzdG9tUmVuZGVyZWRcIiA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJXaGl0ZUJhbGFuY2VcIiA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJHYWluQ29udHJvbFwiIDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNvbnRyYXN0XCIgOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU2F0dXJhdGlvblwiIDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlNoYXJwbmVzc1wiIDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlN1YmplY3REaXN0YW5jZVJhbmdlXCIgOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRmlsZVNvdXJjZVwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aWZEYXRhW3RhZ10gPSBTdHJpbmdWYWx1ZXNbdGFnXVtleGlmRGF0YVt0YWddXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJFeGlmVmVyc2lvblwiIDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkZsYXNocGl4VmVyc2lvblwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aWZEYXRhW3RhZ10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV4aWZEYXRhW3RhZ11bMF0sIGV4aWZEYXRhW3RhZ11bMV0sIGV4aWZEYXRhW3RhZ11bMl0sIGV4aWZEYXRhW3RhZ11bM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNvbXBvbmVudHNDb25maWd1cmF0aW9uXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpZkRhdGFbdGFnXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nVmFsdWVzLkNvbXBvbmVudHNbZXhpZkRhdGFbdGFnXVswXV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZ1ZhbHVlcy5Db21wb25lbnRzW2V4aWZEYXRhW3RhZ11bMV1dICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmdWYWx1ZXMuQ29tcG9uZW50c1tleGlmRGF0YVt0YWddWzJdXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nVmFsdWVzLkNvbXBvbmVudHNbZXhpZkRhdGFbdGFnXVszXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFnc1t0YWddID0gZXhpZkRhdGFbdGFnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YWdzLkdQU0luZm9JRkRQb2ludGVyKSB7XG4gICAgICAgICAgICBncHNEYXRhID0gcmVhZFRhZ3MoZmlsZSwgdGlmZk9mZnNldCwgdGlmZk9mZnNldCArIHRhZ3MuR1BTSW5mb0lGRFBvaW50ZXIsIEdQU1RhZ3MsIGJpZ0VuZCk7XG4gICAgICAgICAgICBmb3IgKHRhZyBpbiBncHNEYXRhKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0YWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkdQU1ZlcnNpb25JRFwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdwc0RhdGFbdGFnXSA9IGdwc0RhdGFbdGFnXVswXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuXCIgKyBncHNEYXRhW3RhZ11bMV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLlwiICsgZ3BzRGF0YVt0YWddWzJdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi5cIiArIGdwc0RhdGFbdGFnXVszXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YWdzW3RhZ10gPSBncHNEYXRhW3RhZ107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBleHRyYWN0IHRodW1ibmFpbFxuICAgICAgICB0YWdzWyd0aHVtYm5haWwnXSA9IHJlYWRUaHVtYm5haWxJbWFnZShmaWxlLCB0aWZmT2Zmc2V0LCBmaXJzdElGRE9mZnNldCwgYmlnRW5kKTtcblxuICAgICAgICByZXR1cm4gdGFncztcbiAgICB9XG5cbiAgIGZ1bmN0aW9uIGZpbmRYTVBpbkpQRUcoZmlsZSkge1xuXG4gICAgICAgIGlmICghKCdET01QYXJzZXInIGluIHNlbGYpKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ1hNTCBwYXJzaW5nIG5vdCBzdXBwb3J0ZWQgd2l0aG91dCBET01QYXJzZXInKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoZmlsZSk7XG5cbiAgICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIkdvdCBmaWxlIG9mIGxlbmd0aCBcIiArIGZpbGUuYnl0ZUxlbmd0aCk7XG4gICAgICAgIGlmICgoZGF0YVZpZXcuZ2V0VWludDgoMCkgIT0gMHhGRikgfHwgKGRhdGFWaWV3LmdldFVpbnQ4KDEpICE9IDB4RDgpKSB7XG4gICAgICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJOb3QgYSB2YWxpZCBKUEVHXCIpO1xuICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vdCBhIHZhbGlkIGpwZWdcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXQgPSAyLFxuICAgICAgICAgICAgbGVuZ3RoID0gZmlsZS5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgZG9tID0gbmV3IERPTVBhcnNlcigpO1xuXG4gICAgICAgIHdoaWxlIChvZmZzZXQgPCAobGVuZ3RoLTQpKSB7XG4gICAgICAgICAgICBpZiAoZ2V0U3RyaW5nRnJvbURCKGRhdGFWaWV3LCBvZmZzZXQsIDQpID09IFwiaHR0cFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0T2Zmc2V0ID0gb2Zmc2V0IC0gMTtcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbkxlbmd0aCA9IGRhdGFWaWV3LmdldFVpbnQxNihvZmZzZXQgLSAyKSAtIDE7XG4gICAgICAgICAgICAgICAgdmFyIHhtcFN0cmluZyA9IGdldFN0cmluZ0Zyb21EQihkYXRhVmlldywgc3RhcnRPZmZzZXQsIHNlY3Rpb25MZW5ndGgpXG4gICAgICAgICAgICAgICAgdmFyIHhtcEVuZEluZGV4ID0geG1wU3RyaW5nLmluZGV4T2YoJ3htcG1ldGE+JykgKyA4O1xuICAgICAgICAgICAgICAgIHhtcFN0cmluZyA9IHhtcFN0cmluZy5zdWJzdHJpbmcoIHhtcFN0cmluZy5pbmRleE9mKCAnPHg6eG1wbWV0YScgKSwgeG1wRW5kSW5kZXggKTtcblxuICAgICAgICAgICAgICAgIHZhciBpbmRleE9mWG1wID0geG1wU3RyaW5nLmluZGV4T2YoJ3g6eG1wbWV0YScpICsgMTBcbiAgICAgICAgICAgICAgICAvL01hbnkgY3VzdG9tIHdyaXR0ZW4gcHJvZ3JhbXMgZW1iZWQgeG1wL3htbCB3aXRob3V0IGFueSBuYW1lc3BhY2UuIEZvbGxvd2luZyBhcmUgc29tZSBvZiB0aGVtLlxuICAgICAgICAgICAgICAgIC8vV2l0aG91dCB0aGVzZSBuYW1lc3BhY2VzLCBYTUwgaXMgdGhvdWdodCB0byBiZSBpbnZhbGlkIGJ5IHBhcnNlcnNcbiAgICAgICAgICAgICAgICB4bXBTdHJpbmcgPSB4bXBTdHJpbmcuc2xpY2UoMCwgaW5kZXhPZlhtcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICd4bWxuczpJcHRjNHhtcENvcmU9XCJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvXCIgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJ3htbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCIgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJ3htbG5zOnRpZmY9XCJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wL1wiICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICd4bWxuczpwbHVzPVwiaHR0cDovL3NjaGVtYXMuYW5kcm9pZC5jb20vYXBrL2xpYi9jb20uZ29vZ2xlLmFuZHJvaWQuZ21zLnBsdXNcIiAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAneG1sbnM6ZXh0PVwiaHR0cDovL3d3dy5nZXR0eWltYWdlcy5jb20veHNsdEV4dGVuc2lvbi8xLjBcIiAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAneG1sbnM6ZXhpZj1cImh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvXCIgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJ3htbG5zOnN0RXZ0PVwiaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjXCIgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJ3htbG5zOnN0UmVmPVwiaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmI1wiICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICd4bWxuczpjcnM9XCJodHRwOi8vbnMuYWRvYmUuY29tL2NhbWVyYS1yYXctc2V0dGluZ3MvMS4wL1wiICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICd4bWxuczp4YXBHSW1nPVwiaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL2cvaW1nL1wiICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICd4bWxuczpJcHRjNHhtcEV4dD1cImh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS9cIiAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB4bXBTdHJpbmcuc2xpY2UoaW5kZXhPZlhtcClcblxuICAgICAgICAgICAgICAgIHZhciBkb21Eb2N1bWVudCA9IGRvbS5wYXJzZUZyb21TdHJpbmcoIHhtcFN0cmluZywgJ3RleHQveG1sJyApO1xuICAgICAgICAgICAgICAgIHJldHVybiB4bWwyT2JqZWN0KGRvbURvY3VtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICBvZmZzZXQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHhtbDJqc29uKHhtbCkge1xuICAgICAgICB2YXIganNvbiA9IHt9O1xuICAgICAgXG4gICAgICAgIGlmICh4bWwubm9kZVR5cGUgPT0gMSkgeyAvLyBlbGVtZW50IG5vZGVcbiAgICAgICAgICBpZiAoeG1sLmF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAganNvblsnQGF0dHJpYnV0ZXMnXSA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB4bWwuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlID0geG1sLmF0dHJpYnV0ZXMuaXRlbShqKTtcbiAgICAgICAgICAgICAganNvblsnQGF0dHJpYnV0ZXMnXVthdHRyaWJ1dGUubm9kZU5hbWVdID0gYXR0cmlidXRlLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoeG1sLm5vZGVUeXBlID09IDMpIHsgLy8gdGV4dCBub2RlXG4gICAgICAgICAgcmV0dXJuIHhtbC5ub2RlVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyBkZWFsIHdpdGggY2hpbGRyZW5cbiAgICAgICAgaWYgKHhtbC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgeG1sLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHhtbC5jaGlsZE5vZGVzLml0ZW0oaSk7XG4gICAgICAgICAgICB2YXIgbm9kZU5hbWUgPSBjaGlsZC5ub2RlTmFtZTtcbiAgICAgICAgICAgIGlmIChqc29uW25vZGVOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGpzb25bbm9kZU5hbWVdID0geG1sMmpzb24oY2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGpzb25bbm9kZU5hbWVdLnB1c2ggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBvbGQgPSBqc29uW25vZGVOYW1lXTtcbiAgICAgICAgICAgICAgICBqc29uW25vZGVOYW1lXSA9IFtdO1xuICAgICAgICAgICAgICAgIGpzb25bbm9kZU5hbWVdLnB1c2gob2xkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBqc29uW25vZGVOYW1lXS5wdXNoKHhtbDJqc29uKGNoaWxkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB4bWwyT2JqZWN0KHhtbCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICAgICAgaWYgKHhtbC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeG1sLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB4bWwuY2hpbGRyZW4uaXRlbShpKTtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlcyA9IGl0ZW0uYXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICBmb3IodmFyIGlkeCBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtQXR0ID0gYXR0cmlidXRlc1tpZHhdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YUtleSA9IGl0ZW1BdHQubm9kZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhVmFsdWUgPSBpdGVtQXR0Lm5vZGVWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtkYXRhS2V5XSA9IGRhdGFWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbm9kZU5hbWUgPSBpdGVtLm5vZGVOYW1lO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob2JqW25vZGVOYW1lXSkgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgb2JqW25vZGVOYW1lXSA9IHhtbDJqc29uKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvYmpbbm9kZU5hbWVdLnB1c2gpID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZCA9IG9ialtub2RlTmFtZV07XG5cbiAgICAgICAgICAgICAgICAgICAgb2JqW25vZGVOYW1lXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBvYmpbbm9kZU5hbWVdLnB1c2gob2xkKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9ialtub2RlTmFtZV0ucHVzaCh4bWwyanNvbihpdGVtKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvYmogPSB4bWwudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgfVxuXG4gICAgRVhJRi5lbmFibGVYbXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgRVhJRi5pc1htcEVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIEVYSUYuZGlzYWJsZVhtcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBFWElGLmlzWG1wRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIEVYSUYuZ2V0RGF0YSA9IGZ1bmN0aW9uKGltZywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCgoc2VsZi5JbWFnZSAmJiBpbWcgaW5zdGFuY2VvZiBzZWxmLkltYWdlKVxuICAgICAgICAgICAgfHwgKHNlbGYuSFRNTEltYWdlRWxlbWVudCAmJiBpbWcgaW5zdGFuY2VvZiBzZWxmLkhUTUxJbWFnZUVsZW1lbnQpKVxuICAgICAgICAgICAgJiYgIWltZy5jb21wbGV0ZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICBpZiAoIWltYWdlSGFzRGF0YShpbWcpKSB7XG4gICAgICAgICAgICBnZXRJbWFnZURhdGEoaW1nLCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGltZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgRVhJRi5nZXRUYWcgPSBmdW5jdGlvbihpbWcsIHRhZykge1xuICAgICAgICBpZiAoIWltYWdlSGFzRGF0YShpbWcpKSByZXR1cm47XG4gICAgICAgIHJldHVybiBpbWcuZXhpZmRhdGFbdGFnXTtcbiAgICB9XG4gICAgXG4gICAgRVhJRi5nZXRJcHRjVGFnID0gZnVuY3Rpb24oaW1nLCB0YWcpIHtcbiAgICAgICAgaWYgKCFpbWFnZUhhc0RhdGEoaW1nKSkgcmV0dXJuO1xuICAgICAgICByZXR1cm4gaW1nLmlwdGNkYXRhW3RhZ107XG4gICAgfVxuXG4gICAgRVhJRi5nZXRBbGxUYWdzID0gZnVuY3Rpb24oaW1nKSB7XG4gICAgICAgIGlmICghaW1hZ2VIYXNEYXRhKGltZykpIHJldHVybiB7fTtcbiAgICAgICAgdmFyIGEsXG4gICAgICAgICAgICBkYXRhID0gaW1nLmV4aWZkYXRhLFxuICAgICAgICAgICAgdGFncyA9IHt9O1xuICAgICAgICBmb3IgKGEgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoYSkpIHtcbiAgICAgICAgICAgICAgICB0YWdzW2FdID0gZGF0YVthXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFncztcbiAgICB9XG4gICAgXG4gICAgRVhJRi5nZXRBbGxJcHRjVGFncyA9IGZ1bmN0aW9uKGltZykge1xuICAgICAgICBpZiAoIWltYWdlSGFzRGF0YShpbWcpKSByZXR1cm4ge307XG4gICAgICAgIHZhciBhLFxuICAgICAgICAgICAgZGF0YSA9IGltZy5pcHRjZGF0YSxcbiAgICAgICAgICAgIHRhZ3MgPSB7fTtcbiAgICAgICAgZm9yIChhIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGEpKSB7XG4gICAgICAgICAgICAgICAgdGFnc1thXSA9IGRhdGFbYV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhZ3M7XG4gICAgfVxuXG4gICAgRVhJRi5wcmV0dHkgPSBmdW5jdGlvbihpbWcpIHtcbiAgICAgICAgaWYgKCFpbWFnZUhhc0RhdGEoaW1nKSkgcmV0dXJuIFwiXCI7XG4gICAgICAgIHZhciBhLFxuICAgICAgICAgICAgZGF0YSA9IGltZy5leGlmZGF0YSxcbiAgICAgICAgICAgIHN0clByZXR0eSA9IFwiXCI7XG4gICAgICAgIGZvciAoYSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShhKSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVthXSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2FdIGluc3RhbmNlb2YgTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJQcmV0dHkgKz0gYSArIFwiIDogXCIgKyBkYXRhW2FdICsgXCIgW1wiICsgZGF0YVthXS5udW1lcmF0b3IgKyBcIi9cIiArIGRhdGFbYV0uZGVub21pbmF0b3IgKyBcIl1cXHJcXG5cIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0clByZXR0eSArPSBhICsgXCIgOiBbXCIgKyBkYXRhW2FdLmxlbmd0aCArIFwiIHZhbHVlc11cXHJcXG5cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0clByZXR0eSArPSBhICsgXCIgOiBcIiArIGRhdGFbYV0gKyBcIlxcclxcblwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyUHJldHR5O1xuICAgIH1cblxuICAgIEVYSUYucmVhZEZyb21CaW5hcnlGaWxlID0gZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICByZXR1cm4gZmluZEVYSUZpbkpQRUcoZmlsZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoJ2V4aWYtanMnLCBbXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gRVhJRjtcbiAgICAgICAgfSk7XG4gICAgfVxufS5jYWxsKHRoaXMpKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBnZXRJbWFnZXNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2dldEltYWdlc1wiKTtcbmNvbnN0IG9wdGlvbnNfMSA9IHJlcXVpcmUoXCIuL29wdGlvbnNcIik7XG5leHBvcnRzLmdldEJhc2U2NFN0cmluZ3MgPSBhc3luYyAoZmlsZXMsIHsgbWF4U2l6ZSA9IG9wdGlvbnNfMS5kZWZhdWx0T3B0aW9ucy5tYXhTaXplIH0gPSB7fSkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW52YXMgY2FuIG5vdCBjcmVhdGVkJyk7XG4gICAgfVxuICAgIGNvbnN0IGltYWdlcyA9IGF3YWl0IGdldEltYWdlc18xLmdldEltYWdlcyhmaWxlcyk7XG4gICAgY29uc3QgYmFzZTY0cyA9IGltYWdlcy5tYXAoaW1hZ2UgPT4ge1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IGdldEltYWdlc18xLmdldE9yaWVudGF0aW9uKGltYWdlKTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBnZXRJbWFnZXNfMS5nZXRTaXplKG9yaWVudGF0aW9uID4gNCA/IGltYWdlLmhlaWdodCA6IGltYWdlLndpZHRoLCBvcmllbnRhdGlvbiA+IDQgPyBpbWFnZS53aWR0aCA6IGltYWdlLmhlaWdodCwgbWF4U2l6ZSk7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7d2lkdGh9cHhgKTtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7aGVpZ2h0fXB4YCk7XG4gICAgICAgIGNvbnN0IHsgdHJhbnNsYXRlLCBzY2FsZSwgcm90YXRlIH0gPSBnZXRJbWFnZXNfMS5nZXRDYW52YXNPcHRpb25zKHdpZHRoLCBoZWlnaHQsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgY29udGV4dC50cmFuc2xhdGUodHJhbnNsYXRlLngsIHRyYW5zbGF0ZS55KTtcbiAgICAgICAgY29udGV4dC5zY2FsZShzY2FsZS54LCBzY2FsZS55KTtcbiAgICAgICAgY29udGV4dC5yb3RhdGUocm90YXRlLmFuZ2xlKTtcbiAgICAgICAgLy8gZXhpZiBvcmllbnRhdGlvbiB2YWx1ZXMgPiA0IGNvcnJlc3BvbmQgdG8gcG9ydHJhaXQgb3JpZW50YXRpb24uXG4gICAgICAgIC8vIHdpZHRoIGFuZCBoZWlnaHQgcGFyYW1ldGVycyBtdXN0IGJlIHN3YXBwZWQgZm9yIGxhbmRzY2FwZSB0byBlbnN1cmUgY29ycmVjdCBpbWFnZSBkaXNwbGF5XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA+IDQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpO1xuICAgIH0pO1xuICAgIHJldHVybiBiYXNlNjRzO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2dldEJhc2U2NFN0cmluZ3NcIikpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1heFNpemU6IDcyMCxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEVYSUYgPSByZXF1aXJlKFwiZXhpZi1qc1wiKTtcbmNvbnN0IHJlYWRGaWxlXzEgPSByZXF1aXJlKFwiLi9yZWFkRmlsZVwiKTtcbmNvbnN0IHJlYWRJbWFnZV8xID0gcmVxdWlyZShcIi4vcmVhZEltYWdlXCIpO1xuY29uc3Qgb3B0aW9uc18xID0gcmVxdWlyZShcIi4uL29wdGlvbnNcIik7XG5hc3luYyBmdW5jdGlvbiBnZXRJbWFnZXMoZmlsZXMpIHtcbiAgICBjb25zdCBkYXRhcyA9IGF3YWl0IHJlYWRGaWxlXzEuZ2V0RGF0YUZyb21SZWFkRmlsZShmaWxlcyk7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKGRhdGFzLm1hcChpdGVtID0+IHJlYWRJbWFnZV8xLnJlYWRJbWFnZShpdGVtKSkpO1xufVxuZXhwb3J0cy5nZXRJbWFnZXMgPSBnZXRJbWFnZXM7XG5mdW5jdGlvbiBnZXRTaXplKHdpZHRoLCBoZWlnaHQsIG1heFNpemUgPSBvcHRpb25zXzEuZGVmYXVsdE9wdGlvbnMubWF4U2l6ZSkge1xuICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IG1heFNpemUsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCAqIChtYXhTaXplIC8gd2lkdGgpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoaGVpZ2h0ID4gd2lkdGgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCAqIChtYXhTaXplIC8gaGVpZ2h0KSxcbiAgICAgICAgICAgIGhlaWdodDogbWF4U2l6ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IG1heFNpemUsXG4gICAgICAgIGhlaWdodDogbWF4U2l6ZSxcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRTaXplID0gZ2V0U2l6ZTtcbmZ1bmN0aW9uIGdldE9yaWVudGF0aW9uKGltZykge1xuICAgIGxldCBvcmllbnRhdGlvbiA9IDE7XG4gICAgLy8gQHRzLWlnbm9yZSBub3Qgc3RyaW5nOiBodHRwczovL2dpdGh1Yi5jb20vZXhpZi1qcy9leGlmLWpzL3B1bGwvMTk4XG4gICAgRVhJRi5nZXREYXRhKGltZywgKCkgPT4ge1xuICAgICAgICBvcmllbnRhdGlvbiA9IEVYSUYuZ2V0VGFnKGltZywgJ09yaWVudGF0aW9uJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9yaWVudGF0aW9uO1xufVxuZXhwb3J0cy5nZXRPcmllbnRhdGlvbiA9IGdldE9yaWVudGF0aW9uO1xuZnVuY3Rpb24gZ2V0Q2FudmFzT3B0aW9ucyh3aWR0aCwgaGVpZ2h0LCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgfSxcbiAgICAgICAgcm90YXRlOiB7XG4gICAgICAgICAgICBhbmdsZTogMCxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgLy8gaG9yaXpvbnRhbCBmbGlwXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMudHJhbnNsYXRlLFxuICAgICAgICAgICAgICAgICAgICB4OiB3aWR0aCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIHg6IC0xLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAvLyAxODDCsCByb3RhdGUgbGVmdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICB4OiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogaGVpZ2h0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcm90YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiBNYXRoLlBJLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAvLyB2ZXJ0aWNhbCBmbGlwXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMudHJhbnNsYXRlLFxuICAgICAgICAgICAgICAgICAgICB5OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLnNjYWxlLFxuICAgICAgICAgICAgICAgICAgICB5OiAtMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgLy8gdmVydGljYWwgZmxpcCArIDkwIHJvdGF0ZSByaWdodFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIHg6IC0xLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcm90YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiAoOTAgKiBNYXRoLlBJKSAvIDE4MCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgLy8gOTDCsCByb3RhdGUgcmlnaHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucy50cmFuc2xhdGUsXG4gICAgICAgICAgICAgICAgICAgIHg6IHdpZHRoLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcm90YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiAoOTAgKiBNYXRoLlBJKSAvIDE4MCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgLy8gaG9yaXpvbnRhbCBmbGlwICsgOTAgcm90YXRlIHJpZ2h0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICB5OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByb3RhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6ICg5MCAqIE1hdGguUEkpIC8gMTgwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgeTogLTEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIC8vIDkwwrAgcm90YXRlIGxlZnRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucy50cmFuc2xhdGUsXG4gICAgICAgICAgICAgICAgICAgIHk6IGhlaWdodCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJvdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBhbmdsZTogLSg5MCAqIE1hdGguUEkpIC8gMTgwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRDYW52YXNPcHRpb25zID0gZ2V0Q2FudmFzT3B0aW9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gcmVhZEZpbGUoZmlsZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4gcmVzb2x2ZShlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICByZWFkZXIub25lcnJvciA9IGVycm9yID0+IHJlamVjdChlcnJvcik7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5yZWFkRmlsZSA9IHJlYWRGaWxlO1xuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YUZyb21SZWFkRmlsZShmaWxlcykge1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChBcnJheS5mcm9tKGZpbGVzKS5tYXAoKGZpbGUpID0+IHJlYWRGaWxlKGZpbGUpKSk7XG59XG5leHBvcnRzLmdldERhdGFGcm9tUmVhZEZpbGUgPSBnZXREYXRhRnJvbVJlYWRGaWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiByZWFkSW1hZ2Uoc3JjKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICAgICAgaW1nLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xuICAgICAgICBpbWcuc3JjID0gc3JjO1xuICAgIH0pO1xufVxuZXhwb3J0cy5yZWFkSW1hZ2UgPSByZWFkSW1hZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9