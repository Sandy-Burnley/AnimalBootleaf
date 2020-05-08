var config = {
	"title": "Map",
	"start": {
		// "maxZoom": 16,
		"center": [51.531560, -0.156757],
		"zoom": 4,
		"attributionControl": true,
		"zoomControl": false
	},
	"about": {
		"title": "About the map",
		"contents": "<p>This map is designed to map human and nonhuman presence across a Victorian landscape in order to allow users to explore how Victorians defined, challenged, and altered what it meant to be human against a nonhuman backdrop. Identity markers are mometarily limited to species and sex across five texts. <br> Using this open source version of Bootleaf, created by Brian McBride and improved by IAG-geo led by Stephen Lead, users can use this map to target any text or attribute designated within the sidebar.</p>"
	},
	"about": {
		"title": "How to use this map",
		"contents": "<p>Click on a box to reveal markers for each text or identity attributes listed in the right sidebar. You can choose the option to select all to reveal all markers on the map, or you can individually isolate boxes to reveal markers in a more organized and legible fashion. Markers can overlap one another for users to explore patterns and relationships between identifiers.</p>"
	},
	"controls": {
		"zoom": {
			"position": "topleft"
		},
		"leafletGeocoder": {
			//https://github.com/perliedman/leaflet-control-geocoder
			"collapsed": false,
			"position": "topleft",
			"placeholder": "Search for a location",
			"type": "OpenStreetMap", // OpenStreetMap, Google, ArcGIS
			//"suffix": "Australia", // optional keyword to append to every search
			//"key": "AIzaS....sbW_E", // when using the Google geocoder, include your Google Maps API key (https://developers.google.com/maps/documentation/geocoding/start#get-a-key)
		},
		"TOC": {
			//http://leafletjs.com/reference-1.0.2.html#control-layers-option
			"collapsed": false,
			"uncategorisedLabel": "Layers",
			"position": "topright",
			"toggleAll": true
		},
		"history": {
			"position": "bottomleft"
		},
		"bookmarks": {
			"position": "bottomright",
			"places": [
				{
				"latlng": [
					51.531209, -0.157110
				],
				"zoom": 12,
				"name": "Regents Park",
				"id": "a148fa354ba3",
				"editable": true,
				"removable": true
				}
			]
		}
	},
	// "activeTool": "identify", // options are identify/coordinates/queryWidget
	"basemaps": ['esriGray', 'esriDarkGray', 'esriStreets', 'OpenStreetMap', "Aerial"],
	"bing_key": "enter your Bing Maps key",
	//"mapboxKey": "pk.eyJ1IjoiYnVybmxleTIiLCJhIjoiY2s1aWpucm13MDlrcTN0cDRsMHhpaTdzZiJ9.hYC-K6YuQGmhlzU9ERFlQA",
	// "defaultIcon": {
	// 	"imagePath": "http://leafletjs.com/examples/custom-icons/",
	// 	"iconUrl": "leaf-green.png",
	// 	"shadowUrl": "leaf-shadow.png",
	// 	"iconSize":     [38, 95],
	// 		"shadowSize":   [50, 64],
	// 		"iconAnchor":   [22, 94],
	// 		"shadowAnchor": [4, 62],
	// 		"popupAnchor":  [-3, -76]
	// },
	"tocCategories": [
		{
			"name": "GeoJSON layers",
			"layers": ["puck", "flush", "hound", "vanityfair"]
		},
		{
			"name": "Attribute Table",
			"layers": ["Humans", "Horses", "Dogs", "Birds", "Farm_Animals", "Males", "Females"]
		},
// 		{
// 			"name": "ArcGIS Layers",
// 			"layers" : ["Puck_Map", "Hound", "Flush", "Vanity_Fair"]
// 		},	
			],
	
	"projections": [
		{4269: '+proj=longlat +ellps=GRS80 +datum=NAD83 +no_defs '}
	],
	"highlightStyle": {
		"weight": 2,
		"opacity": 1,
		"color": 'white',
		"dashArray": '3',
		"fillOpacity": 0.5,
		"fillColor": '#E31A1C',
		"stroke": true
	},
	"layers": [
	{
    "id": "puck",
    "name": "Puck",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 5,
    "url": "./data/puck.geojson",
    "icon": {
        "iconUrl": "./img/dog.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  "label": {
	  	"name": "Character",
	  "minZoom": 12
	   }	
	},
	
		{
    "id": "flush",
    "name": "Flush",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 5,
    "url": "./data/flush.geojson",
    "icon": {
        "iconUrl": "./img/dog.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  "label": {
	  	"name": "Character",
		  
	  	"minZoom": 12
	  }
	},
		{
    "id": "hound",
    "name": "Hound",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 5,
    "url": "./data/hound.geojson",
    "icon": {
        "iconUrl": "./img/sherlock.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  "label": {
	  	"name": "Character",
	  	"minZoom": 12
	   }
	},
			{
    "id": "vanityfair",
    "name": "Vanity Fair",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 5,
    "url": "./data/vanityfair.geojson",
    "icon": {
        "iconUrl": "./img/moneybags.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  "label": {
	  	"name": "Character",
	  "minZoom": 12
	   }
	},
// 		{
//     "id": "VF_Species",
//     "name": "VF Species",
//     "type": "geoJSON",
//     "cluster": true,
//     "showCoverageOnHover": false,
//     "minZoom": 12,
//     "url": "./data/VF_Species.geojson",
//     "icon": {
//         "iconUrl": "./img/moneybags.png",
//         "iconSize": [24,28]
//     },
//     "style": {
//     "stroke": true,
//     "fillColor": "#00FFFF",
//     "fillOpacity": 0.5,
//     "radius": 10,
//     "weight": 0.5,
//     "opacity": 1,
//     "color": '#727272',
//     },
// 	  "visible": false,
// 	  "label": {
// 	  	"name": "Species",
// 	  "minZoom": 12
// 	   }
// 	},
		{
    "id": "Humans",
    "name": "Humans",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 5,
    "url": "./data/Humans.geojson",
    "icon": {
        "iconUrl": "./img/Human.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  "label": {
	  	"name": "Title",
	  "minZoom": 12
	   }	
	},
		{
    "id": "Horses",
    "name": "Horses",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 5,
    "url": "./data/Horses.geojson",
    "icon": {
        "iconUrl": "./img/Horse.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  "label": {
	  	"name": "Title",
	  "minZoom": 12
	   }	
	},
		{
    "id": "Dogs",
    "name": "Canines",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 5,
    "url": "./data/Dogs.geojson",
    "icon": {
        "iconUrl": "./img/canine.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  "label": {
	  	"name": "Title",
	  "minZoom": 12
	   }	
	},
		{
    "id": "Birds",
    "name": "Birds",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 5,
    "url": "./data/Birds.geojson",
    "icon": {
        "iconUrl": "./img/Bird.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  "label": {
	  	"name": "Title",
	  "minZoom": 12
	   }	
	},
		{
    "id": "Farm_Animals",
    "name": "Farm Animals",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 5,
    "url": "./data/Farm_Animals.geojson",
    "icon": {
        "iconUrl": "./img/Farm.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  "label": {
	  	"name": "Title",
	  "minZoom": 12
	   }	
	},
		{
    "id": "Males",
    "name": "Males",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 5,
    "url": "./data/Males.geojson",
    "icon": {
        "iconUrl": "./img/Male.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  "label": {
	  	"name": "Title",
	  "minZoom": 12
	   }	
	},
		{
    "id": "Females",
    "name": "Females",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 5,
    "url": "./data/Females.geojson",
    "icon": {
        "iconUrl": "./img/Female.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  "label": {
	  	"name": "Title",
	  "minZoom": 12
	   }	
	},

// 		{
// 			"id": "Puck_Map",
// 			"name": "Puck Attributes (feature)",
// 			"type": "agsFeatureLayer",
// 			"cluster": false,
// 			"showCoverageOnHover": false,
// 			"removeOutsideVisibleBounds": true,
// 			"url": "https://services.arcgis.com/uHAHKfH1Z5ye1Oe0/arcgis/rest/services/PuckMap/FeatureServer",
// 			"popup": true,
// 			"tooltipField": "Species",
// 			"outFields": [
// 				{"type": "OID",	"name": "FID"},
// 				{"name": "Character", "alias": "character"},
// 				{"name": "Species", "alias": "species"},
// 				{"name": "Location", "alias": "location"},
// 				{"name": "Class", "alias": "class"},
// 				{"name": "Gender", "alias": "gender"},
// 				{"name": "Author", "alias": "author"},
// 				{"name": "Breed_Race", "alias": "race"},
// 			],
// 			"visible": true,
// 			"queryWidget": {
// 				"queries" : [
// 					{"name": "Character", "alias": "Character", "defaultOperator": "starts with"},
// 					{"name": "Species", "alias": "species"}
// 				],
// 				"outFields": [
// 					{"name": "Character", "alias": "character"},
// 					{"name": "Species", "alias": "species"},
// 					{"name": "HEIGHT", hidden: true},
// 					{"name": "DIAMETER", "hidden": true}
// 				]
// 			},
// 			"style": {
// 				"stroke": true,
// 		    "fillColor": "#00FFFF",
// 		    "fillOpacity": 0.5,
// 		    "radius": 10,
// 		    "weight": 0.5,
// 		    "opacity": 1,
// 		    "color": '#727272'
// 		  },
// 			"minZoom": 16
// 		},
// 		{
// 			"id": "Hound",
// 			"name": "Hound Attributes (feature)",
// 			"type": "agsFeatureLayer",
// 			"cluster": true,
// 			"showCoverageOnHover": false,
// 			"removeOutsideVisibleBounds": true,
// 			"url": "https://services.arcgis.com/uHAHKfH1Z5ye1Oe0/arcgis/rest/services/Hounds/FeatureServer/0",
// 			"popup": true,
// 			"outFields": [
// 				{"type": "OID",	"name": "FID"},
// 				{"name": "Title"},
// 				{"name": "Author"},
// 				{"name": "Character"},
// 				{"name": "Species"},
// 				{"name": "Gender"},
// 				{"name": "Breed_Race"},
// 				{"name": "Class"},
// 				{"name": "Relationship"},
// 				{"name": "Occupation"},
// 				{"name": "Color"},
// 				{"name": "Location"},
// 				{"name": "Assumed_Location", "alias": "Assumed Location"},
// 				{"name": "Longitude"},
// 				{"name": "Latitude"},
// 				{"name": "Degrees"},
// 				{"name": "Longevity"},
// 				{"name": "Description"},
// 				{"name": "Page_Number", "alias": "Page Number"},
// 				{"name": "Marginalized_Associates", "alias": "Marginalized Associates"},
// 			],
				
// 			"visible": true,
// 			"queryWidget": {
// 				"queries" : [
// 					{"name": "Title", "defaultOperator": "starts with"},
// 					{"name": "Character"}
// 				],
// 				"outFields": [
// 					{"name": "Title"},
// 					{"name": "Author"},
// 					{"name": "Character"},
// 					{"name": "Species"}
// 				]
// 			},
// 			"style": {
// 				"stroke": true,
// 		    "fillColor": "#00FFFF",
// 		    "fillOpacity": 0.5,
// 		    "radius": 10,
// 		    "weight": 0.5,
// 		    "opacity": 1,
// 		    "color": '#727272'
// 		  },
// 			"minZoom": 16
// 		},
	
// 			{
// 			"id": "Vanity_Fair",
// 			"name": "Vanity Fair Attributes (feature)",
// 			"type": "agsFeatureLayer",
// 			"cluster": false,
// 			"showCoverageOnHover": false,
// 			"removeOutsideVisibleBounds": true,
// 			"url": "https://services.arcgis.com/uHAHKfH1Z5ye1Oe0/arcgis/rest/services/Vanity_Fair/FeatureServer",
// 			"popup": true,
// 			"tooltipField": "Character",
// 			"outFields": [
// 				{"type": "OID",	"name": "FID"},
// 				{"name": "Character", "alias": "character"},
// 				{"name": "Species", "alias": "species"},
// 				{"name": "Location", "alias": "location"},
// 				{"name": "Class", "alias": "class"},
// 				{"name": "Gender", "alias": "gender"},
// 				{"name": "Author", "alias": "author"},
// 				{"name": "Breed_Race", "alias": "race"},
// 			],
// 			"visible": true,
// 			"queryWidget": {
// 				"queries" : [
// 					{"name": "Character", "alias": "Character", "defaultOperator": "starts with"},
// 					{"name": "Species", "alias": "species"}
// 				],
// 				"outFields": [
// 					{"name": "Character", "alias": "character"},
// 					{"name": "Species", "alias": "species"},
// 					{"name": "HEIGHT", hidden: true},
// 					{"name": "DIAMETER", "hidden": true}
// 				]
// 			},
// 			"style": {
// 				"stroke": true,
// 		    "fillColor": "#00FFFF",
// 		    "fillOpacity": 0.5,
// 		    "radius": 10,
// 		    "weight": 0.5,
// 		    "opacity": 1,
// 		    "color": '#727272'
// 		  },
// 			"minZoom": 16
// 		}
			
		

	]
}
