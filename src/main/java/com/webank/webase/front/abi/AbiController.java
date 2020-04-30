/**
 * Copyright 2014-2020 the original author or authors.
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.webank.webase.front.abi;

import com.webank.webase.front.abi.entity.AbiInfo;
import com.webank.webase.front.abi.entity.ReqDelAbi;
import com.webank.webase.front.abi.entity.ReqImportAbi;
import com.webank.webase.front.base.code.ConstantCode;
import com.webank.webase.front.base.controller.BaseController;
import com.webank.webase.front.base.exception.FrontException;
import com.webank.webase.front.base.response.BasePageResponse;
import com.webank.webase.front.base.response.BaseResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * import abi info to send transaction directly
 * @author marsli
 */
@Slf4j
@Api(value = "/abi", tags = "import contract abi directly")
@RestController
@RequestMapping("/abi")
public class AbiController extends BaseController {

	@Autowired
	AbiService abiService;

	@ApiOperation(value = "getAbiListByGroupId",
			notes = "get imported abi info list by page")
	@GetMapping("/list/{groupId}/{pageNumber}/{pageSize}")
	public BasePageResponse getAbiListByGroupId(@PathVariable("groupId") Integer groupId,
												@PathVariable("pageNumber") Integer pageNumber,
												@PathVariable("pageSize") Integer pageSize) {
		log.debug("start getAbiListByGroupId. groupId:{}", groupId);
		List<AbiInfo> resList;
		if (pageNumber < 1) {
			throw new FrontException(ConstantCode.PARAM_ERROR);
		}
		Pageable pageable = new PageRequest(pageNumber - 1, pageSize,
				new Sort(Sort.Direction.DESC, "createTime"));
		resList = abiService.getListByGroupId(groupId, pageable);

		log.debug("end getAbiListByGroupId resList count. {}", resList.size());
		return new BasePageResponse(ConstantCode.RET_SUCCESS, resList, resList.size());
	}

	@ApiOperation(value = "importAbi",
			notes = "import abi info")
	@PostMapping("")
	public BaseResponse importAbi(@Valid @RequestBody ReqImportAbi importAbi, BindingResult result) {
		checkParamResult(result);
		log.debug("start importAbi. importAbi:{}", importAbi);
		abiService.insertAbiInfo(importAbi);
		log.debug("end importAbi");
		return new BaseResponse(ConstantCode.RET_SUCCESS);
	}

	@ApiOperation(value = "deleteAbi",
			notes = "delete imported abi info")
	@DeleteMapping("")
	public BaseResponse deleteAbi(@Valid @RequestBody ReqDelAbi param, BindingResult result) {
		checkParamResult(result);
		Long abiId = param.getAbiId();
		log.debug("start deleteAbi. abiId:{}", abiId);
		abiService.delete(abiId);
		log.debug("end deleteAbi");
		return new BaseResponse(ConstantCode.RET_SUCCESS);
	}
}
