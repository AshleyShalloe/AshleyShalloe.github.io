var constellationsArray = {
  "B.1.617.1-like": {
    "label": "B.1.617.1-like",
    "description": "Defining constellation for lineage B.1.617.1",
    "sources": [
      "https://github.com/cov-lineages/pango-designation/issues/38",
      "https://www.telegraphindia.com/india/covid-double-mutation-variant-fuels-fears/cid/1809715"
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "B.1.617.1"
      ],
      "mrca_lineage": "B.1.617.1",
      "PHE_label": "V-21APR-01",
      "representative_genome": ""
    },
    "tags": [
      "B.1.617.1",
      "VUI-21APR-01",
      "V-21APR-01"
    ],
    "sites": [
      "nuc:C3457T",
      "nsp3:T749I",
      "nsp6:T77A",
      "nsp13:M429I",
      "nsp15:K259R",
      "S:L452R",
      "S:E484Q",
      "S:P681R",
      "ORF3a:S26L",
      "ORF7a:V82A",
      "N:R203M"
    ],
    "rules": {
      "min_alt": 5,
      "max_ref": 3
    }
  },
  "Omicron (BA.1-like)": {
    "label": "Omicron (BA.1-like)",
    "description": "BA.1 lineage defining mutations",
    "sources": [],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "BA.1"
      ],
      "WHO_label": "Omicron",
      "mrca_lineage": "BA.1",
      "lineage_name": "BA.1",
      "parent_lineage": "B.1.1.529",
      "PHE_label": "VOC-21NOV-01",
      "representative_genome": ""
    },
    "tags": [
      "BA.1",
      "VOC-21NOV-01"
    ],
    "sites": [
      "orf1ab:K856R",
      "nuc:T5386G",
      "del:6513:3",
      "orf1ab:A2710T",
      "orf1ab:L3674F",
      "orf1ab:SGF3675-",
      "orf1ab:I3758V",
      "nuc:T13195C",
      "nuc:C15240T",
      "spike:A67V",
      "del:21765:6",
      "spike:T95I",
      "del:21987:9",
      "del:22194:3",
      "nuc:22205+GAGCCAGAA",
      "spike:S371L",
      "spike:G446S",
      "spike:Q493R",
      "spike:G496S",
      "spike:T547K",
      "spike:N856K",
      "spike:L981F",
      "nuc:C25000T",
      "nuc:C25584T",
      "m:D3G",
      "n:RG203KR"
    ],
    "note": "Unique mutations for sublineage",
    "note2": "Requires ancestral mutation so scorpio tie breaks correctly",
    "rules": {
      "default": {
        "min_alt": 17,
        "max_ref": 2
      }
    }
  },
  "Omicron (BA.2-like)": {
    "label": "Omicron (BA.2-like)",
    "description": "BA.2 lineage defining mutations",
    "sources": [],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "BA.2"
      ],
      "WHO_label": "Omicron",
      "mrca_lineage": "BA.2",
      "lineage_name": "BA.2",
      "parent_lineage": "B.1.1.529",
      "PHE_label": "VOC-22JAN-01",
      "representative_genome": ""
    },
    "tags": [
      "BA.2",
      "VOC-22JAN-01"
    ],
    "sites": [
      "orf1ab:S135R",
      "orf1ab:T842I",
      "orf1ab:G1307S",
      "nuc:C4321T",
      "orf1ab:L3027F",
      "nuc:A9424G",
      "orf1ab:T3090I",
      "orf1ab:L3201F",
      "orf1ab:SGF3675-",
      "nuc:C10198T",
      "nuc:G10447A",
      "nuc:C12880T",
      "nuc:C15714T",
      "orf1ab:R5716C",
      "orf1ab:T6564I",
      "nuc:A20055G",
      "spike:T19I",
      "del:21633:9",
      "nuc:T22200G",
      "spike:S371F",
      "spike:T376A",
      "spike:D405N",
      "spike:R408S",
      "spike:Q493R",
      "nuc:C25000T",
      "nuc:C25584T",
      "nuc:C26060T",
      "nuc:C26858T",
      "orf6:D61L",
      "n:RG203KR",
      "n:S413R"
    ],
    "note": "Unique mutations for sublineage",
    "rules": {
      "default": {
        "min_alt": 27,
        "max_ref": 3,
        "spike:Q493": "alt",
        "n:P151": "ref",
        "nuc:G27788": "ref"
      }
    }
  },
  "Epsilon (B.1.429-like)": {
    "label": "Epsilon (B.1.429-like)",
    "description": "",
    "sources": [],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "B.1.429"
      ],
      "WHO_label": "Epsilon",
      "mrca_lineage": "B.1.429",
      "representative_genome": ""
    },
    "tags": [
      "B.1.427"
    ],
    "sites": [
      "spike:S13I",
      "spike:W152C",
      "spike:L452R",
      "orf1a:T265I",
      "nuc:C3037T",
      "orf1a:I4205V",
      "orf1b:D1183Y",
      "spike:D614G",
      "orf3a:Q57H",
      "nuc:T24349C",
      "nuc:C26681T",
      "nuc:G27890T",
      "nuc:A28272T",
      "n:T205I"
    ],
    "intermediate": [
      "nuc:C8947T:0.943143",
      "nuc:C12100T:0.945662",
      "orf1b:P314L:0.953340"
    ],
    "rules": {
      "min_alt": 6,
      "max_ref": 3
    }
  },
  "Delta (AY.4.2-like)": {
    "label": "Delta (AY.4.2-like)",
    "description": "AY.4.2 lineage defining mutations",
    "sources": [],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "AY.4.2"
      ],
      "mrca_lineage": "AY.4.2",
      "lineage_name": "AY.4.2",
      "parent_lineage": "AY.4",
      "PHE_label": "V-21OCT-01",
      "representative_genome": ""
    },
    "tags": [
      "AY.4.2",
      "V-21OCT-01"
    ],
    "sites": [
      "nuc:T17040C",
      "spike:A222V",
      "spike:Y145H"
    ],
    "rules": {
      "min_alt": 2,
      "max_ref": 0
    }
  },
  "Eta (B.1.525-like)": {
    "label": "Eta (B.1.525-like)",
    "description": "This variant is a cluster of E484K containing genomes",
    "sources": [
      null
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "B.1.525"
      ],
      "mrca_lineage": "B.1.525",
      "PHE_label": "V-21FEB-03",
      "WHO_label": "Eta",
      "representative_genome": ""
    },
    "tags": [
      "B.1.525",
      "VUI-21FEB-03",
      "VUI202102/03",
      "Eta",
      "G/484K.V3",
      "20A",
      "V-21FEB-03"
    ],
    "sites": [
      "nuc:C1498T",
      "nuc:A1807G",
      "nuc:T8593C",
      "nuc:C9565T",
      "nsp12:P323F",
      "nuc:C18171T",
      "nuc:A20724G",
      "S:Q52R",
      "S:E484K",
      "S:Q677H",
      "S:F888L",
      "nuc:C24748T",
      "E:L21F",
      "M:I82T",
      "nuc:A28699G",
      "nuc:G29543T"
    ],
    "rules": {
      "min_alt": 8,
      "max_ref": 3
    }
  },
  "AV.1-like": {
    "label": "AV.1-like",
    "description": "AV.1 lineage defining mutations",
    "sources": [],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "AV.1"
      ],
      "mrca_lineage": "AV.1",
      "PHE_label": "VOC-20DEC-01",
      "representative_genome": ""
    },
    "tags": [
      "AV.1",
      "VOC-20DEC-01"
    ],
    "sites": [
      "s:D80G",
      "s:T95I",
      "s:G142D",
      "s:Y144-",
      "s:N439K",
      "s:E484K",
      "s:D614G",
      "s:P681H",
      "s:I1130V",
      "s:D1139H",
      "M:A63T",
      "M:H125Y",
      "N:I157V",
      "N:R203K",
      "N:G204R"
    ],
    "rules": {
      "min_alt": 7,
      "max_ref": 3
    }
  },
  "B.1.1.7-like+E484K": {
    "label": "B.1.1.7-like+E484K",
    "description": "This is a variant of cB.1.1.7 that additionally contains E484K. This includes all independent instances of this.",
    "sources": [
      "https://virological.org/t/563"
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "B.1.1.7"
      ],
      "mrca_lineage": "B.1.1.7",
      "representative_genome": ""
    },
    "tags": [
      "B.1.1.7",
      "E484K"
    ],
    "sites": [
      "nuc:C913T",
      "1ab:T1001I",
      "1ab:A1708D",
      "nuc:C5986T",
      "1ab:I2230T",
      "1ab:SGF3675-",
      "nuc:C14676T",
      "nuc:C15279T",
      "nuc:T16176C",
      "s:HV69-",
      "s:Y144-",
      "S:E484K",
      "s:N501Y",
      "s:A570D",
      "s:P681H",
      "s:T716I",
      "s:S982A",
      "s:D1118H",
      "nuc:C26801T",
      "8:Q27*",
      "8:R52I",
      "8:Y73C",
      "N:D3L",
      "N:S235F"
    ],
    "rules": {
      "min_alt": 15,
      "max_ref": 3,
      "S:E484K": "alt"
    }
  },
  "Omicron (BA.5-like)": {
    "label": "Omicron (BA.5-like)",
    "description": "BA.5 lineage defining mutations",
    "sources": [],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "BA.5"
      ],
      "WHO_label": "Omicron",
      "mrca_lineage": "BA.5",
      "lineage_name": "BA.5",
      "parent_lineage": "B.1.1.529",
      "PHE_label": "V-22APR-04",
      "representative_genome": ""
    },
    "tags": [
      "BA.5",
      "V-22APR-04"
    ],
    "sites": [
      "orf1ab:S135R",
      "orf1ab:T842I",
      "orf1ab:G1307S",
      "nuc:C4321T",
      "orf1ab:T3090I",
      "nuc:C10198T",
      "nuc:G10447A",
      "del:11288:9",
      "nuc:G12160A",
      "nuc:C12880T",
      "nuc:C15714T",
      "orf1ab:R5716C",
      "orf1ab:T6564I",
      "nuc:A20055G",
      "spike:T19I",
      "s:HV69-",
      "spike:V213G",
      "spike:S371F",
      "spike:T376A",
      "spike:D405N",
      "spike:L452R",
      "spike:F486V",
      "nuc:C25000T",
      "nuc:C25584T",
      "nuc:C26060T",
      "m:D3N",
      "n:RG203KR",
      "n:S413R"
    ],
    "note": "Unique mutations for sublineage",
    "rules": {
      "default": {
        "min_alt": 27,
        "max_ref": 5,
        "s:Q493": "ref",
        "nuc:C26858": "ref",
        "nuc:G27788": "ref",
        "n:P151": "ref",
        "m:D3": "alt"
      }
    }
  },
  "Omicron (Unassigned)": {
    "label": "Omicron (Unassigned)",
    "description": "B.1.1.529 lineage defining mutations",
    "sources": [],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "B.1.1.529"
      ],
      "WHO_label": "Omicron",
      "mrca_lineage": "None",
      "representative_genome": "",
      "lineage_name": "B.1.1.529",
      "incompatible_lineage_calls": []
    },
    "tags": [
      "B.1.1.529"
    ],
    "sites": [
      "nuc:C3037T",
      "orf1ab:T3255I",
      "orf1ab:P3395H",
      "orf1ab:P4715L",
      "orf1ab:I5967V",
      "spike:G142D",
      "spike:G339D",
      "spike:S373P",
      "spike:S375F",
      "spike:K417N",
      "spike:N440K",
      "spike:S477N",
      "spike:T478K",
      "spike:E484A",
      "spike:Q498R",
      "spike:N501Y",
      "spike:Y505H",
      "spike:D614G",
      "spike:H655Y",
      "spike:N679K",
      "spike:P681H",
      "spike:N764K",
      "spike:D796Y",
      "spike:Q954H",
      "spike:N969K",
      "e:T9I",
      "m:Q19E",
      "m:A63T",
      "nuc:A27259C",
      "nuc:C27807T",
      "nuc:A28271T",
      "n:P13L",
      "del:28362:9"
    ],
    "note": "Common mutations to the sublineages found",
    "rules": {
      "default": {
        "min_alt": 22,
        "max_ref": 2,
        "spike:D614G": "not ref"
      },
      "Probable": {
        "min_alt": 12,
        "max_ref": 14
      }
    }
  },
  "A.23.1-like+E484K": {
    "label": "A.23.1-like+E484K",
    "description": "This is a variant of cA.23.1 that additionally contains E484K.",
    "sources": [
      "https://doi.org/10.1101/2021.02.08.21251393"
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "A.23.1"
      ],
      "mrca_lineage": "A.23.1",
      "PHE_label": "V-21FEB-01",
      "representative_genome": ""
    },
    "tags": [
      "A.23.1",
      "VUI-21FEB-01",
      "VUI202102/01",
      "V-21FEB-01"
    ],
    "sites": [
      "nsp3:L741F",
      "nsp6:M86I",
      "nsp6:L98F",
      "nsp6:M183I",
      "S:R102I",
      "S:F157L",
      "S:V367F",
      "S:E484K",
      "S:Q613H",
      "S:P681R",
      "ORF8:L84S",
      "ORF8:E92K",
      "N:S202N"
    ],
    "rules": {
      "min_alt": 5,
      "max_ref": 3,
      "S:E484K": "alt"
    }
  },
  "B.1.1.318-like": {
    "label": "B.1.1.318-like",
    "description": "Defining of lineage B.1.1.318",
    "sources": [
      "https://github.com/cov-lineages/pango-designation/issues/15"
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "B.1.1.318"
      ],
      "mrca_lineage": "B.1.1.318",
      "PHE_label": "V-21FEB-04",
      "representative_genome": ""
    },
    "tags": [
      "B.1.1.318",
      "VUI-21FEB-04",
      "VUI202102/04",
      "V-21FEB-04"
    ],
    "sites": [
      "nuc:C3961T",
      "nsp3:K1693N",
      "nsp4:T173I",
      "nsp4:A446V",
      "nsp5:T21I",
      "del:11287:9",
      "nsp15:V320M",
      "S:T95I",
      "del:21990:3",
      "S:E484K",
      "nuc:T23287C",
      "S:P681H",
      "S:D796H",
      "nuc:C25276A",
      "M:I82T",
      "del:27887:15",
      "ORF8:E106*",
      "nuc:A28271G",
      "del:28895:3"
    ],
    "rules": {
      "min_alt": 11,
      "max_ref": 3
    }
  },
  "Epsilon (B.1.427-like)": {
    "label": "Epsilon (B.1.427-like)",
    "description": "",
    "sources": [],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "B.1.427"
      ],
      "WHO_label": "Epsilon",
      "mrca_lineage": "B.1.427",
      "representative_genome": ""
    },
    "tags": [
      "B.1.427"
    ],
    "sites": [
      "spike:S13I",
      "spike:W152C",
      "spike:L452R",
      "nuc:C241T",
      "orf1a:T265I",
      "nuc:C3037T",
      "orf1b:D1183Y",
      "spike:D614G",
      "orf3a:Q57H",
      "nuc:C26681T",
      "n:T205I",
      "nuc:G13713A",
      "nuc:A28272T"
    ],
    "intermediate": [
      "orf1a:S3158T:0.953838",
      "orf1b:P314L:0.927219",
      "orf1b:P976L:0.948544"
    ],
    "rules": {
      "min_alt": 5,
      "max_ref": 3
    }
  },
  "Beta (B.1.351-like)": {
    "label": "Beta (B.1.351-like)",
    "description": "Defining of lineage B.1.351",
    "sources": [
      "https://www.medrxiv.org/content/10.1101/2020.12.21.20248640v1"
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "B.1.351"
      ],
      "mrca_lineage": "B.1.351",
      "PHE_label": "VOC-20DEC-02",
      "WHO_label": "Beta",
      "representative_genome": ""
    },
    "tags": [
      "B.1.351",
      "VOC-20DEC-02",
      "VOC202012/02",
      "Beta",
      "501.V2",
      "20H",
      "GH"
    ],
    "sites": [
      "NSP2:T85I",
      "ORF1ab:K1655N",
      "ORF1ab:K3353R",
      "S:D80A",
      "S:D215G",
      "S:E484K",
      "S:N501Y",
      "S:A701V",
      "ORF3a:Q57H",
      "ORF3a:S171L",
      "E:P71L",
      "N:T205I",
      "del:22280:9",
      "del:11287:9"
    ],
    "rules": {
      "min_alt": 6,
      "max_ref": 3
    }
  },
  "Omicron (XE-like)": {
    "label": "Omicron (XE-like)",
    "description": "XE recombinant lineage defining mutations",
    "sources": [],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "XE"
      ],
      "WHO_label": "Omicron",
      "parent_lineage": "XE-parent2",
      "mrca_lineage": "XE",
      "PHE_label": "V-22APR-02",
      "lineage_name": "XE",
      "representative_genome": ""
    },
    "tags": [
      "XE",
      "GL2",
      "V-22APR-02"
    ],
    "note": "Unique mutations for XE sublineage",
    "sites": [
      "nuc:C3241T",
      "nuc:T5386G",
      "nuc:C14599T",
      "nuc:C12880T",
      "nuc:A29510C",
      "nuc:C14599T"
    ],
    "rules": {
      "min_alt": 2,
      "max_ref": 0
    }
  },
  "B.1.617.3-like": {
    "label": "B.1.617.3-like",
    "description": "Defining constellation for lineage B.1.617.3",
    "sources": [
      "https://github.com/cov-lineages/pango-designation/issues/49"
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "B.1.617.3"
      ],
      "mrca_lineage": "B.1.617.3",
      "PHE_label": "V-21APR-03",
      "representative_genome": ""
    },
    "tags": [
      "B.1.617.3",
      "VUI-21APR-03",
      "V-21APR-03"
    ],
    "sites": [
      "nuc:C835T",
      "nsp3:A1526V",
      "nsp3:T1830I",
      "nsp5:A194S",
      "nsp6:A117V",
      "nuc:C16293T",
      "S:T19R",
      "S:L452R",
      "S:E484Q",
      "S:P681R",
      "S:D950N",
      "nuc:T27384C",
      "ORF7a:V82A",
      "ORF8:T26I",
      "N:P67S",
      "N:R203M",
      "N:D377Y"
    ],
    "rules": {
      "min_alt": 9,
      "max_ref": 3
    }
  },
  "Alpha (B.1.1.7-like)": {
    "label": "Alpha (B.1.1.7-like)",
    "description": "B.1.1.7 lineage defining mutations",
    "sources": [
      "https://virological.org/t/563"
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "B.1.1.7"
      ],
      "mrca_lineage": "B.1.1.7",
      "PHE_label": "VOC-20DEC-01",
      "WHO_label": "Alpha",
      "representative_genome": ""
    },
    "tags": [
      "B.1.1.7",
      "VOC 202012/01"
    ],
    "sites": [
      "nuc:C913T",
      "1ab:T1001I",
      "1ab:A1708D",
      "nuc:C5986T",
      "1ab:I2230T",
      "1ab:SGF3675-",
      "nuc:C14676T",
      "nuc:C15279T",
      "nuc:T16176C",
      "s:HV69-",
      "s:Y144-",
      "s:N501Y",
      "s:A570D",
      "s:P681H",
      "s:T716I",
      "s:S982A",
      "s:D1118H",
      "nuc:C26801T",
      "8:Q27*",
      "8:R52I",
      "8:Y73C",
      "N:D3L",
      "N:S235F"
    ],
    "rules": {
      "min_alt": 15,
      "max_ref": 3
    }
  },
  "Zeta (P.2-like)": {
    "label": "Zeta (P.2-like)",
    "description": "Defining constellation for lineage P.2",
    "sources": [
      null
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "P.2"
      ],
      "mrca_lineage": "P.2",
      "PHE_label": "V-21JAN-01",
      "WHO_label": "Zeta",
      "representative_genome": ""
    },
    "tags": [
      "P.2",
      "VUI-21JAN-01",
      "VUI202101/01",
      "V-21JAN-01"
    ],
    "sites": [
      "ORF1ab:L205V",
      "nuc:C11824T",
      "S:E484K",
      "nuc:A12964G",
      "nuc:C28253T",
      "N:A119S",
      "N:M234I"
    ],
    "rules": {
      "min_alt": 5,
      "max_ref": 1
    }
  },
  "XE-parent2": {
    "label": "XE-parent2",
    "description": "3' parent of XE recombinant lineage",
    "sources": [],
    "type": "variant",
    "variant": {
      "mrca_lineage": "",
      "lineage_name": "XE-parent2",
      "parent_lineage": "XE-parent1",
      "representative_genome": ""
    },
    "tags": [
      "XE",
      "GL2"
    ],
    "note": "Likely breakpoint: between 10448 and 11287 (NSP5 or NSP6)",
    "sites": [
      "nuc:C15714T",
      "nuc:C12880T",
      "orf1ab:R5716C",
      "orf1ab:T6564I",
      "nuc:A20055G",
      "spike:T19I",
      "del:21633:9",
      "nuc:T22200G",
      "spike:S371F",
      "spike:T376A",
      "spike:D405N",
      "spike:R408S",
      "nuc:C25000T",
      "nuc:C25584T",
      "nuc:C26060T",
      "nuc:C26858T",
      "orf6:D61L",
      "n:S413R"
    ],
    "rules": {
      "default": {
        "min_alt": 8,
        "max_ref": 3
      }
    }
  },
  "Iota (B.1.526-like)": {
    "label": "Iota (B.1.526-like)",
    "description": "",
    "sources": [
      null
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "B.1.526"
      ],
      "mrca_lineage": "B.1.526",
      "WHO_label": "Iota",
      "representative_genome": ""
    },
    "tags": [
      "B.1.526",
      "Iota"
    ],
    "sites": [
      "nuc:C3037T",
      "ORF1a:T265I",
      "ORF1a:L3201P",
      "1ab:SGF3675-",
      "ORF1b:P314L",
      "ORF1b:Q1011H",
      "nuc:A20262G",
      "S:L5F",
      "S:T95I",
      "S:D253G",
      "S:E484K",
      "S:D614G",
      "S:A701V",
      "ORF3a:P42L",
      "ORF3a:Q57H",
      "N:P199L",
      "N:M234I",
      "ORF8:T11I",
      "S:S477N",
      "S:Q957R",
      "N:P13L",
      "N:S202R",
      "nuc:A28271-"
    ],
    "rules": {
      "min_alt": 11,
      "max_ref": 7
    }
  },
  "Delta (B.1.617.2-like) +K417N": {
    "label": "Delta (B.1.617.2-like) +K417N",
    "description": "Defining constellation for lineage B.1.617.2 with the addition of spike K417N",
    "sources": [
      "https://github.com/cov-lineages/pango-designation/issues/49"
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "AY.1",
        "AY.2",
        "B.1.617.2"
      ],
      "incompatible_lineage_calls": [
        "AY.4",
        "AY.4.2"
      ],
      "mrca_lineage": "B.1.617.2",
      "representative_genome": ""
    },
    "tags": [
      "B.1.617.2",
      "K417N",
      "VOC-21APR-02",
      "VUI-21APR-02"
    ],
    "sites": [
      "S:T19R",
      "S:K417N",
      "S:L452R",
      "S:T478K",
      "S:P681R",
      "S:D950N",
      "ORF3a:S26L",
      "M:I82T",
      "ORF7a:V82A",
      "ORF7a:T120I",
      "N:D63G",
      "N:R203M",
      "N:D377Y"
    ],
    "rules": {
      "min_alt": 5,
      "max_ref": 3,
      "S:K417N": "alt"
    }
  },
  "Delta (B.1.617.2-like)": {
    "label": "Delta (B.1.617.2-like)",
    "description": "Defining constellation for lineage B.1.617.2",
    "sources": [
      "https://github.com/cov-lineages/pango-designation/issues/49"
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "B.1.617.2",
        "AY.1",
        "AY.2"
      ],
      "mrca_lineage": "B.1.617.2",
      "lineage_name": "B.1.617.2",
      "incompatible_lineage_calls": [
        "AY.1",
        "AY.2",
        "AY.4",
        "AY.4.2"
      ],
      "PHE_label": "VOC-21APR-02",
      "WHO_label": "Delta",
      "representative_genome": ""
    },
    "tags": [
      "B.1.617.2",
      "VOC-21APR-02",
      "Delta",
      "VUI-21APR-02"
    ],
    "sites": [
      "S:T19R",
      "S:G142D",
      "S:L452R",
      "S:T478K",
      "S:P681R",
      "S:D950N",
      "ORF3a:S26L",
      "M:I82T",
      "ORF7a:V82A",
      "ORF7a:T120I",
      "N:D63G",
      "N:R203M",
      "N:D377Y"
    ],
    "rules": {
      "min_alt": 5,
      "max_ref": 3
    }
  },
  "Mu (B.1.621-like)": {
    "label": "Mu (B.1.621-like)",
    "description": "",
    "sources": [
      "https://github.com/cov-lineages/pango-designation/issues/57"
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "B.1.621"
      ],
      "mrca_lineage": "B.1.621",
      "WHO_label": "Mu",
      "representative_genome": ""
    },
    "tags": [
      "B.1.621"
    ],
    "sites": [
      "nuc:C3037T",
      "ORF1a:T1055A",
      "ORF1a:T1538I",
      "nuc:C6037T",
      "ORF1a:T3255I",
      "ORF1a:Q3729R",
      "nuc:A13057T",
      "ORF1b:P314L",
      "ORF1b:P1342S",
      "nuc:C18877T",
      "nuc:T19035C",
      "nuc:C20148T",
      "spike:T95I",
      "spike:Y145N",
      "spike:R346K",
      "spike:E484K",
      "spike:N501Y",
      "spike:D614G",
      "spike:P681H",
      "spike:D950N",
      "ORF3a:Q57H",
      "nuc:A26492T",
      "ORF8:T11K",
      "ORF8:P38S",
      "ORF8:S67F",
      "nuc:A28272T",
      "N:T205I"
    ],
    "intermediate": [
      "ins:21991+TAC:0.833333",
      "del:26158:4:0.916667",
      "nuc:C241T:0.916667",
      "spike:Y144S:0.916667",
      "ORF3a:L106F:0.916667",
      "nuc:T28618A:0.916667"
    ],
    "rules": {
      "min_alt": 19,
      "max_ref": 3
    }
  },
  "Theta (P.3-like)": {
    "label": "Theta (P.3-like)",
    "description": "Defining constellation for lineage P.3",
    "sources": [
      "https://github.com/cov-lineages/pango-designation/issues/27",
      "https://www.medrxiv.org/content/10.1101/2021.03.03.21252812v2"
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "P.3"
      ],
      "mrca_lineage": "P.3",
      "PHE_label": "V-21MAR-02",
      "WHO_label": "Theta",
      "representative_genome": ""
    },
    "tags": [
      "P.3",
      "VUI-21MAR-02",
      "VUI202103/02",
      "V-21MAR-02"
    ],
    "sites": [
      "nsp3:D736G",
      "nsp4:L438P",
      "nsp6:D112E",
      "nsp7:L71F",
      "nsp13:A368V",
      "del:21980:9",
      "S:E484K",
      "S:N501Y",
      "S:P681H",
      "S:E1092K",
      "S:H1101Y",
      "S:V1176F",
      "ORF8:K2Q",
      "nuc:C7564A",
      "nuc:C12049T",
      "nuc:T23341C",
      "nuc:T24187A"
    ],
    "rules": {
      "min_alt": 9,
      "max_ref": 3
    }
  },
  "A.23.1-like": {
    "label": "A.23.1-like",
    "description": "A.23.1 lineage defining mutations",
    "sources": [
      "https://doi.org/10.1101/2021.02.08.21251393"
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "A.23.1"
      ],
      "mrca_lineage": "A.23.1",
      "representative_genome": ""
    },
    "tags": [
      "A.23.1"
    ],
    "sites": [
      "nsp3:L741F",
      "nsp6:M86I",
      "nsp6:L98F",
      "nsp6:M183I",
      "S:R102I",
      "S:F157L",
      "S:V367F",
      "S:Q613H",
      "S:P681R",
      "ORF8:L84S",
      "ORF8:E92K",
      "N:S202N"
    ],
    "rules": {
      "min_alt": 5,
      "max_ref": 3
    }
  },
  "Omicron (BA.3-like)": {
    "label": "Omicron (BA.3-like)",
    "description": "BA.3 lineage defining mutations",
    "sources": [],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "BA.3"
      ],
      "WHO_label": "Omicron",
      "mrca_lineage": "BA.3",
      "lineage_name": "BA.3",
      "parent_lineage": "B.1.1.529",
      "representative_genome": ""
    },
    "tags": [
      "BA.3"
    ],
    "sites": [
      "orf1ab:S135R",
      "nuc:C832T",
      "orf1ab:G1307S",
      "orf1ab:T3090I",
      "orf1ab:SGF3675-",
      "nuc:G10447A",
      "nuc:C11235T",
      "nuc:C12880T",
      "nuc:C15714T",
      "spike:A67V",
      "spike:Q493R",
      "del:21765:6",
      "del:21987:9",
      "del:22194:3",
      "spike:S371F",
      "spike:D405N",
      "spike:G446S",
      "orf3a:T223V",
      "nuc:C26858T",
      "n:RG203KR",
      "n:S413R"
    ],
    "note": "Unique mutations for sublineage",
    "rules": {
      "default": {
        "min_alt": 13,
        "max_ref": 2
      }
    }
  },
  "Delta (AY.4-like)": {
    "label": "Delta (AY.4-like)",
    "description": "AY.4 lineage defining mutations",
    "sources": [],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "AY.4"
      ],
      "mrca_lineage": "AY.4",
      "lineage_name": "AY.4",
      "parent_lineage": "B.1.617.2",
      "incompatible_lineage_calls": [
        "AY.4.2"
      ],
      "representative_genome": ""
    },
    "tags": [
      "AY.4"
    ],
    "sites": [
      "del:28271:1",
      "del:22029:6",
      "del:28248:6",
      "orf1a:A1306S",
      "orf1a:P2046L",
      "orf1a:P2287S",
      "orf1a:A2529V",
      "nuc:C8986T",
      "orf1a:V2930L",
      "orf1a:T3255I",
      "orf1a:T3646A",
      "nuc:A11332G",
      "orf1b:P314L",
      "orf1b:G662S",
      "orf1b:P1000L",
      "orf1b:A1918V",
      "nuc:C27874T",
      "n:G215C",
      "nuc:G29742T"
    ],
    "intermediate": [
      "nuc:G210T:0.961862",
      "nuc:C241T:0.972018",
      "nuc:T17040C:0.468120",
      "spike:T95I:0.967111"
    ],
    "rules": {
      "min_alt": 12,
      "max_ref": 3,
      "orf1a:A2529V": "alt"
    }
  },
  "Gamma (P.1-like)": {
    "label": "Gamma (P.1-like)",
    "description": "Defining constellation for lineage P.1",
    "sources": [
      "https://virological.org/t/586",
      "https://cov-lineages.org/global_report_P.1.html"
    ],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "P.1"
      ],
      "mrca_lineage": "P.1",
      "PHE_label": "VOC-21JAN-02",
      "WHO_label": "Gamma",
      "representative_genome": ""
    },
    "tags": [
      "P.1",
      "VOC-21JAN-02",
      "VOC202101/02"
    ],
    "sites": [
      "nuc:T733C",
      "nuc:C2749T",
      "ORF1ab:S1188L",
      "ORF1ab:K1795Q",
      "del:11287:9",
      "nuc:C12778T",
      "nuc:C13860T",
      "S:T20N",
      "S:P26S",
      "S:K417T",
      "S:E484K",
      "S:N501Y",
      "S:T1027I",
      "ORF8:E92K",
      "nuc:28262+AACA",
      "N:P80R"
    ],
    "rules": {
      "min_alt": 8,
      "max_ref": 3
    }
  },
  "XE-parent1": {
    "label": "XE-parent1",
    "description": "Majority parent of XE recombinant lineage",
    "sources": [],
    "type": "variant",
    "variant": {
      "mrca_lineage": "",
      "lineage_name": "XE-parent1",
      "parent_lineage": "B.1.1.529",
      "representative_genome": ""
    },
    "tags": [
      "XE",
      "GL2"
    ],
    "note": "Likely breakpoint: between 10448 and 11287 (NSP5 or NSP6)",
    "sites": [
      "orf1ab:K856R",
      "nuc:T5386G",
      "del:6513:3",
      "orf1ab:A2710T"
    ],
    "rules": {
      "default": {
        "min_alt": 3,
        "max_ref": 0
      }
    }
  },
  "Omicron (BA.4-like)": {
    "label": "Omicron (BA.4-like)",
    "description": "BA.4 lineage defining mutations",
    "sources": [],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "BA.4"
      ],
      "WHO_label": "Omicron",
      "mrca_lineage": "BA.4",
      "lineage_name": "BA.4",
      "parent_lineage": "B.1.1.529",
      "PHE_label": "V-22APR-03",
      "representative_genome": ""
    },
    "tags": [
      "BA.4",
      "V-22APR-03"
    ],
    "sites": [
      "orf1ab:S135R",
      "orf1ab:T842I",
      "orf1ab:G1307S",
      "nuc:C4321T",
      "orf1ab:T3090I",
      "nuc:C10198T",
      "nuc:G10447A",
      "del:11288:9",
      "nuc:G12160A",
      "nuc:C12880T",
      "nuc:C15714T",
      "orf1ab:R5716C",
      "orf1ab:T6564I",
      "nuc:A20055G",
      "spike:T19I",
      "s:HV69-",
      "spike:V213G",
      "spike:S371F",
      "spike:T376A",
      "spike:D405N",
      "spike:L452R",
      "spike:F486V",
      "nuc:C25000T",
      "nuc:C25584T",
      "nuc:C26060T",
      "nuc:C26858T",
      "orf6:D61L",
      "nuc:G27788T",
      "n:P151S",
      "n:RG203KR",
      "n:S413R"
    ],
    "note": "Unique mutations for sublineage",
    "rules": {
      "default": {
        "min_alt": 29,
        "max_ref": 5,
        "m:D3N": "ref",
        "s:Q493": "ref",
        "orf6:D61": "not ref",
        "n:P151S": "alt"
      }
    }
  },
  "Lambda (C.37-like)": {
    "label": "Lambda (C.37-like)",
    "description": "C.37 lineage defining mutations",
    "sources": [],
    "type": "variant",
    "variant": {
      "Pango_lineages": [
        "C.37"
      ],
      "mrca_lineage": "C.37",
      "WHO_label": "Lambda",
      "PHE_label": "V-21JUN-01",
      "representative_genome": ""
    },
    "tags": [
      "Lambda",
      "C.37",
      "V-21JUN-01"
    ],
    "sites": [
      "ORF1a:T1246I",
      "ORF1a:P2287S",
      "ORF1a:F2387V",
      "ORF1a:L3201P",
      "ORF1a:T3255I",
      "ORF1a:G3278S",
      "ORF1a:SGF3675-",
      "ORF1b:P314L",
      "S:G75V",
      "S:T76I",
      "S:RSYLTPG246-",
      "S:L452Q",
      "S:F490S",
      "S:D614G",
      "S:T859N",
      "N:P13L",
      "N:R203K",
      "N:G204R",
      "N:G214C"
    ],
    "rules": {
      "min_alt": 9,
      "max_ref": 3
    }
  }
}
