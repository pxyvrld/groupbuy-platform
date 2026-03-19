package com.groupbuy.backend.controller;

import com.groupbuy.backend.dto.CampaignDto;
import com.groupbuy.backend.dto.CreateCampaignRequest;
import com.groupbuy.backend.service.CampaignService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
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
    public ResponseEntity<CampaignDto> createCampaign(@Valid @RequestBody CreateCampaignRequest request) {
        CampaignDto created = campaignService.create(request);
        URI location = URI.create("/api/campaigns/" + created.id());
        return ResponseEntity.created(location).body(created);
    }

    @DeleteMapping("/api/campaigns/{id}")
    public ResponseEntity<Void> deleteCampaignById(@PathVariable Long id) {
        boolean deleted = campaignService.deleteById(id);
        if (deleted) return ResponseEntity.noContent().build();
        return ResponseEntity.notFound().build();
    }
}
