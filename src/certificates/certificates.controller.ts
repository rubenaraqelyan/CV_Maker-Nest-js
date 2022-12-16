import {Body, Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import {ApiBody, ApiHeader, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CertificatesService} from "./certificates.service";
import {xAuthorization} from "../swagger/main";
import {RequestType, uuId} from "../dto/main.dto";
import {createCertificateResponse, createCertificateBody, getCertificateResponse} from "../swagger/certificates";
import {certificates} from "../dto/certificates.dto";
import {skill} from "../dto/skills.dto";

@ApiTags('Certificates')
@Controller('certificate')
export class CertificatesController {
  constructor(private readonly certificatesService: CertificatesService) {}

  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(createCertificateResponse)
  @ApiBody(createCertificateBody)
  async create(@Req() req: RequestType, @Body() body: certificates){
    const {id} = req.user;
    const data = await this.certificatesService.create(id, body);
    return {
      statusCode: 201,
      message: 'Certificate has been created successfully',
      data
    }
  }

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getCertificateResponse)
  async getList(@Req() req: RequestType){
    const {id} = req.user;
    const data = await this.certificatesService.getList(id);
    return {
      statusCode: 200,
      message: 'Certificates list',
      data
    }
  }

  @Get('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createCertificateResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async getById(@Req() req: RequestType, @Param() param: uuId){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.certificatesService.getById(user_id, id);
    return {
      statusCode: 200,
      message: 'Get certificate',
      data
    }
  }
  @Put('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createCertificateResponse)
  @ApiBody(createCertificateBody)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async update(@Req() req: RequestType, @Param() param: uuId, @Body() body: certificates){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.certificatesService.update(user_id, id, body);
    return {
      statusCode: 200,
      message: 'Certificate has been updated successfully',
      data
    }
  }

  @Delete('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createCertificateResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async destroy(@Req() req: RequestType, @Param() param: uuId){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.certificatesService.destroy(user_id, id);
    return {
      statusCode: 200,
      message: 'Certificate has been removed successfully',
      data
    }
  }
}
