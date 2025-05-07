resource "aws_key_pair" "deploy_key" {
  key_name   = "my-key-pair"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDL4Dto1UDPNi5aVn3ouon+UIDyR824kbV++4968mU+Fcqx+gpxPAYYyjrYRafd50WKytdE2Chi3CBFS/zDln20BgtA4ZUl8kdBDhvE/LyJUKNiH7VKRA9Wy/Q755rU+rlE836Qo/boAt45FXo+BOXyZdZ7bvvuqgsJ8kjHFcUhPNllIEl/kQYRRagpA4hsA6KK1mIXMKWbQaXZg6BR+1Eozv9tjN5AInLvMLPNVQicTm/DuTKotGGaPViPDPA4zS2u1MJdkYnRwUWBjPFmQKl8IHjqGsxx4eosngea4BI0ORgNjuMqE43tpKT3H26knWx4GcSUGaLLlICzpyUmuPwxL1dKJ8+/xA3gG/l+25qMFV3Njk4iQT8tPmXYGTntE/EMOUCZzZAIyMhlkMVKaLHtxVynsfEPh/xzw7yOKihzDNp6bKDHzL3lMr3iG96LS9MMRCZJN2a8aeN03O/WwWqMV7ZkrcGa88fl8oOSXibv8elkjPYaRVOxV/C7VcZF+tk= ak0196274@git-github-gitlab"
}

resource "aws_default_vpc" "default" {
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name = "Default VPC"
  }
}


resource "aws_security_group" "my_sg" {
  name        = "Allow security group"
  description = "Allow SSH and HTTP access"
  vpc_id      = aws_default_vpc.default.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "my_Instance" {
  count         = 2
  ami           = "ami-084568db4383264d4"
  instance_type = "t2.micro"
  key_name      = aws_key_pair.deploy_key.key_name
  vpc_security_group_ids = [aws_security_group.my_sg.id]

  tags = {
    Name = "My-terra_Ins-${count.index + 1}"
  }
}
