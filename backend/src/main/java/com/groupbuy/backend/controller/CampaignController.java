package com.groupbuy.backend.controller;

import com.groupbuy.backend.dto.CampaignDto;
import com.groupbuy.backend.dto.CreateCampaignRequest;
import com.groupbuy.backend.service.CampaignService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class CampaignController {
    private final CampaignService campaignService;

    public CampaignController(CampaignService campaignService) {
        this.campaignService = campaignService;
    }

    @GetMapping("/api/campaigns")
    public List<CampaignDto> getCampaigns() {
        return campaignService.findAll();
    }

    @GetMapping("/api/campaigns/{id}")
    public ResponseEntity<CampaignDto> getCampaignsById(@PathVariable Long id) {
        Optional<CampaignDto> opt = campaignService.findById(id);
        if (opt.isPresent()) return ResponseEntity.ok(opt.get());
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/api/campaigns")
    public ResponseEntity<CampaignDto> createCampaign(@RequestBody CreateCampaignRequest request) {
        return ResponseEntity.status(201).body(new CampaignDto(2L, "Yerba", "done"));
    }
}
