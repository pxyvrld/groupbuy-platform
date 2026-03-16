package com.groupbuy.backend.controller;

import com.groupbuy.backend.dto.CampaignDto;
import com.groupbuy.backend.dto.CreateCampaignRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
public class CampaignController {

    @GetMapping("/api/campaigns")
    public List<CampaignDto> campaigns() {
        return List.of(new CampaignDto(1L, "Coffe", "done"), new CampaignDto(2L, "Yerba", "done"));
    }

    @GetMapping("/api/campaigns/{id}")
    public ResponseEntity<CampaignDto> campaign(@PathVariable Long id) {
        if(id.equals(1L)) return ResponseEntity.ok(new CampaignDto(1L, "Coffee", "done"));
        if(id.equals(2L)) return ResponseEntity.ok(new CampaignDto(2L, "Yerba", "done"));
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/api/campaigns")
    public ResponseEntity<CampaignDto> createCampaign(@RequestBody CreateCampaignRequest request) {
        return ResponseEntity.status(201).body(new CampaignDto(2L, "Yerba", "done"));
    }
}
