const opentelemetry = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { OTLPTraceExporter } =  require('@opentelemetry/exporter-trace-otlp-grpc');
const grpc = require('@grpc/grpc-js');
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');

// For troubleshooting, set the log level to DiagLogLevel.DEBUG
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

const collectorOptions = {
  credentials: grpc.credentials.createSsl()
};

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new OTLPTraceExporter(collectorOptions),
  instrumentations: [getNodeAutoInstrumentations()]
});

sdk.start()