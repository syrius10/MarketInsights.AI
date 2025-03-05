import boto3
import google.cloud.storage as gcs
from azure.storage.blob import BlobServiceClient

class MultiCloudDeployment:
    def __init__(self, aws_creds, gcp_creds, azure_creds):
        self.s3 = boto3.client('s3', **aws_creds)
        self.gcs = gcs.Client.from_service_account_json(gcp_creds)
        self.azure = BlobServiceClient.from_connection_string(azure_creds)

    def upload_to_aws(self, file_name, bucket, object_name=None):
        if object_name is None:
            object_name = file_name
        self.s3.upload_file(file_name, bucket, object_name)

    def upload_to_gcp(self, file_name, bucket_name, blob_name):
        bucket = self.gcs.get_bucket(bucket_name)
        blob = bucket.blob(blob_name)
        blob.upload_from_filename(file_name)

    def upload_to_azure(self, file_name, container_name, blob_name):
        blob_client = self.azure.get_blob_client(container=container_name, blob=blob_name)
        with open(file_name, "rb") as data:
            blob_client.upload_blob(data)