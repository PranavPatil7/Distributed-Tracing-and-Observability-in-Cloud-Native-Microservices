# ./deploy-with-collector-k8s

## This repo has been modified for Elastic
Specifically this repo is additionally modified to support Elastic Cloud end point. 

**Option 1 -To run this with Elastic and OTel Collector:**

In the `deploy-with-collector-k8s` directory

1-change the two VARIABLES in `otelcollector.yaml` - `OTEL_EXPORTER_OTLP_ENDPOINT` and `OTEL_EXPORTER_OTLP_HEADERS` with Elastic APM Server values.

Replace:

```
      otlp/elastic:
        endpoint: OTEL_EXPORTER_OTLP_ENDPOINT
        headers:
          Authorization: OTEL_EXPORTER_OTLP_HEADERS
```

With values from Elastic for APM Server `OTEL_EXPORTER_OTLP_ENDPOINT` & `OTEL_EXPORTER_OTLP_HEADERS`
(NOTE: Below are dummy values to provide an example. Ensure you go to APM Server OTel section in Elastic to get your values)

```
      otlp/elastic:
        endpoint: "https:/dfgsdfsdfgds.ec2.apm.us-east1.gcp.cloud.es.io:443"
        headers:
          Authorization: "Authorization=BearerSFSD%$#$343"
```

Run the following:

```
    kubectl create -f adservice.yaml
    kubectl create -f redis.yaml
    kubectl create -f cartservice.yaml
    kubectl create -f checkoutservice.yaml
    kubectl create -f currencyservice.yaml
    kubectl create -f emailservice.yaml
    kubectl create -f frontend.yaml
    kubectl create -f paymentservice.yaml
    kubectl create -f productcatalogservice.yaml
    kubectl create -f recommendationservice.yaml
    kubectl create -f shippingservice.yaml
    kubectl create -f loadgenerator.yaml
```

Ensure everything is running with `kubectl get pods` and inspect any pods as needed.

Next run the `OTel Collector`

```
    kubetctl create -f otelcollector.yaml
```


