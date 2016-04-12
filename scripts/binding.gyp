{
  "targets": [
    {
      "target_name": "addon",
      "sources": [ 
        "src/performance.cpp"
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}