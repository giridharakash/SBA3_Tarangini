package com.verizon.idb.restApi;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.verizon.idb.model.ISPPackage;
import com.verizon.idb.service.PackageService;

@RestController
@CrossOrigin
@RequestMapping("/package")
public class PackageController {
	
	@Autowired
	private PackageService packageService;
	
	@GetMapping
	public ResponseEntity<List<ISPPackage>> getAllPackages() {
		List<ISPPackage> packageList = packageService.getAllPackages();
		return new ResponseEntity<>(packageList, HttpStatus.OK);
	}
	
//	@GetMapping("/{field}/{srhValue}")
//	public ResponseEntity<List<ISPPackage>> getAllPlans(@PathVariable("field") String fieldBy,
//			@PathVariable("srhValue") String searchValue) {
//
//		ResponseEntity<List<ISPPackage>> resp;
//
//		switch (fieldBy) {
//		case "speed":
//			ISPPackage cBySpeed = packageService.findBySpeed(Integer.parseInt(searchValue));
//			if (cBySpeed != null) {
//				resp = new ResponseEntity<>(Collections.singletonList(cBySpeed), HttpStatus.OK);
//			} else {
//				resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);
//			}
//			break;
//		case "max":
//			ISPPackage cByMax = packageService.findByMax(Integer.parseInt(searchValue));
//			if (cByMax != null) {
//				resp = new ResponseEntity<>(Collections.singletonList(cByMax), HttpStatus.OK);
//			} else {
//				resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);
//			}
//			break;
//		case "price":
//			ISPPackage cByPrice = packageService.findByPrice(Double.parseDouble(searchValue));
//			if (cByPrice != null) {
//				resp = new ResponseEntity<>(Collections.singletonList(cByPrice), HttpStatus.OK);
//			} else {
//				resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);
//			}
//			break;
//		default:
//			resp = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//			break;
//		}
//
//		return resp;
//	}
}
